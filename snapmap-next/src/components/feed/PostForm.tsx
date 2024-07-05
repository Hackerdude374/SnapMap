// src/components/feed/PostForm.tsx
import { useState } from 'react';
import { storage, db } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
interface PostFormProps {
    onClose: () => void;
  }
  
  const PostForm: React.FC<PostFormProps> = ({ onClose }) => {

  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState('');
  const [user] = useAuthState(auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !user) return;

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `feed/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Add post to Firestore
      await addDoc(collection(db, 'posts'), {
        userId: user.uid,
        status,
        imageUrl,
        timestamp: new Date()
      });

      setStatus('');
      setImage(null);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Create Post</h2>
        <button type="button" onClick={onClose} className="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        className="w-full p-2 border rounded bg-white text-black"
      />
      <textarea
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded bg-white text-black"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Post
      </button>
    </form>
  );
};

export default PostForm;
// src/components/auth/SignUp.tsx
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully! You can now sign in.');
      // Optionally, clear the form or redirect the user
      setEmail('');
      setPassword('');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred during sign up');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 border rounded text-black bg-white"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full p-2 border rounded text-black bg-white"
      />
      <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
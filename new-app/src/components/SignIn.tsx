// src/components/SignIn.tsx
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // useRouter has been replaced with useRouter from 'next/navigation'
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');  // Reset error message
    try {
      console.log('Attempting to sign in with email:', email);
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Sign in successful');
      router.push('/map'); // Redirect to the map page
    } catch (err: any) { // Update error handling
      console.error('Sign in error:', err.message);
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      {error && <div className="text-red-500">{error}</div>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Sign In
      </button>
    </form>
  );
};

export default SignIn;

"use client"

// src/components/Navbar.tsx
import Link from 'next/link';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          SnapMap
        </Link>
        <div>
          {user ? (
            <button
              onClick={() => auth.signOut()}
              className="text-white"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
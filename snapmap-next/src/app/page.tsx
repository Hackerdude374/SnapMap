// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Map from "@/components/Map";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import PostForm from "@/components/feed/PostForm";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [showPostForm, setShowPostForm] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="relative w-full h-screen">
      {user ? (
        <>
          <Map />
          <button
            onClick={() => setShowPostForm(true)}
            className="fixed right-4 bottom-4 bg-green-500 text-white p-4 rounded-full shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          {showPostForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <PostForm onClose={() => setShowPostForm(false)} />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex space-x-4 justify-center items-center h-full">
          <SignIn />
          <SignUp />
        </div>
      )}
    </main>
  );
}
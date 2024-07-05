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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {user ? (
        <>
          <Map />
          <PostForm />
        </>
      ) : (
        <div className="flex space-x-4">
          <SignIn />
          <SignUp />
        </div>
      )}
    </main>
  );
}
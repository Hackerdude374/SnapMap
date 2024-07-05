// src/app/page.tsx
import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">SnapMap</h1>
      <p className="mb-4">It helps you to connect with friends by sharing current photos</p>
      <div className="flex">
        <div className="w-1/2 p-2">
          <SignIn />
        </div>
        <div className="w-1/2 p-2">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

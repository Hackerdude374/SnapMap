// src/app/layout.tsx
import './globals.css';
import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>SnapMap</title>
        <meta name="description" content="A PWA which enables you to share photos with friends around the world!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
};

export default Layout;

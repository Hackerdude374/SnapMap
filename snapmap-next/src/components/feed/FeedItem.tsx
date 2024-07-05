// src/components/feed/FeedItem.tsx
import React from 'react';
import Image from 'next/image';

interface FeedItemProps {
  id: string;
  userId: string;
  status: string;
  imageUrl: string;
  timestamp: number;
}

const FeedItem: React.FC<FeedItemProps> = ({ id, userId, status, imageUrl, timestamp }) => {
  const date = new Date(timestamp);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <div className="font-bold mr-2">{userId}</div>
        <div className="text-gray-500 text-sm">{date.toLocaleString()}</div>
      </div>
      {imageUrl && (
        <div className="mb-2">
          <Image src={imageUrl} alt="Post image" width={300} height={300} layout="responsive" objectFit="cover" />
        </div>
      )}
      <p>{status}</p>
    </div>
  );
};

export default FeedItem;
// src/hooks/useFeed.ts
import { useState, useEffect } from 'react';

interface FeedItem {
  email: string;
  status: string;
  image: string;
  location: {
    latitude: number;
    longitude: number;
  };
  time: string;
}

export function useFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);

  useEffect(() => {
    fetch('https://snapmap-gis-default-rtdb.firebaseio.com/feed.json')
      .then(response => response.json())
      .then(data => {
        if (data) {
          const items = Object.entries(data).map(([id, item]: [string, any]) => ({
            id,
            ...item
          }));
          setFeedItems(items);
        }
      })
      .catch(error => console.error('Error fetching feed:', error));
  }, []);

  return feedItems;
}
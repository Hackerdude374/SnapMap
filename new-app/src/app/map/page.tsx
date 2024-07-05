// src/app/map/page.tsx
"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import mapboxgl from 'mapbox-gl';
import { auth } from '../../firebaseConfig';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const MapPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (!user) {
        router.push('/'); // Redirect to home if not authenticated
      }
    });

    // Initialize the map
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40],
      zoom: 9
    });

    const fetchData = async () => {
      const response = await fetch('https://snapmap-gis-default-rtdb.firebaseio.com/feed.json');
      const data = await response.json();
      Object.keys(data).forEach((id) => {
        const item = data[id];
        if (item.location && item.location.longitude && item.location.latitude) {
          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<p>Status: ${item.status}</p><img src="${item.image}" /><p>Email: ${item.email}</p>`
          );
          new mapboxgl.Marker()
            .setLngLat([item.location.longitude, item.location.latitude])
            .setPopup(popup)
            .addTo(map);
        }
      });
    };

    fetchData();

    // Clean up the subscription
    return () => unsubscribe();
  }, [router]);

  return <div id="map" className="w-full h-screen"></div>;
};

export default MapPage;

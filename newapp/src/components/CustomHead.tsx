// src/components/CustomHead.tsx
import Head from 'next/head';
import React from 'react';

const CustomHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SnapMap</title>
      <link rel="stylesheet" href="/assets/css/styles.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js" defer></script>
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css" rel="stylesheet" />
      <script src="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js" defer></script>
      <link rel="manifest" href="/manifest.json" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
        crossOrigin="anonymous"
      />
      <style>
        {`.mapboxgl-popup-content { min-width: 270px; }`}
      </style>
    </Head>
  );
};

export default CustomHead;

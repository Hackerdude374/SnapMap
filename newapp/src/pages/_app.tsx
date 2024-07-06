import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import { app as firebaseApp } from '../firebaseConfig';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Any additional Firebase setup or side effects if necessary
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

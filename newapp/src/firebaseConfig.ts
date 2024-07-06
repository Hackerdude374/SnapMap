// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB8yVha_mbGanwWpWDWnJ0R88I0_54-ej8",
  authDomain: "snapmap-gis.firebaseapp.com",
  databaseURL: "https://snapmap-gis-default-rtdb.firebaseio.com/",
  projectId: "snapmap-gis",
  storageBucket: "snapmap-gis.appspot.com",
  messagingSenderId: "849771840005",
  appId: "1:849771840005:web:8c09c4651cf1b44aea926c",
  measurementId: "G-W3867Q8YE0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);

export { app, auth, database, storage };

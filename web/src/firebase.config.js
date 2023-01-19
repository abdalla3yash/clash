import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkRF7g6HTimmzYkTqMV8tYpU4dfwMGTL8",
  authDomain: "clash-c8db2.firebaseapp.com",
  projectId: "clash-c8db2",
  storageBucket: "clash-c8db2.appspot.com",
  messagingSenderId: "484514349277",
  appId: "1:484514349277:web:7a043649f2897907a05b34",
  measurementId: "G-J4902S2SRS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;

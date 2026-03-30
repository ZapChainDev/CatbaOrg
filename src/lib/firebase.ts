import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPmIqKeJ-tsE2AUQtmD4PMUeLRX-2IPR0",
  authDomain: "catbaloganorg-4f00e.firebaseapp.com",
  projectId: "catbaloganorg-4f00e",
  storageBucket: "catbaloganorg-4f00e.firebasestorage.app",
  messagingSenderId: "651023928610",
  appId: "1:651023928610:web:bbaa95523a76e69506297b",
  measurementId: "G-BHEWSQ2PTH",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq2Wit9s1ezrxDnWFTGYDAT8mCSF5v0a0",
  authDomain: "jwreactfire.firebaseapp.com",
  projectId: "jwreactfire",
  storageBucket: "jwreactfire.appspot.com",
  messagingSenderId: "900430226059",
  appId: "1:900430226059:web:c5d13581268282a31dea8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
export default app;
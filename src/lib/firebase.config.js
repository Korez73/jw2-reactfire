// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
//const app = initializeApp(firebaseConfig);
const app = () => {
  if(!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' + 
      'Add your web app\'s configuration object to firebase.config.js');
  } else {
    console.log('Firebase initialized!');
  }
  return initializeApp(firebaseConfig);
}

export default app;
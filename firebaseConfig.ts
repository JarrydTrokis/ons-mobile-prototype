// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH2SUIseOmVd0AFEy3M2iDl9DaER_TpM8",
  authDomain: "ons-mobile-prototype.firebaseapp.com",
  projectId: "ons-mobile-prototype",
  storageBucket: "ons-mobile-prototype.firebasestorage.app",
  messagingSenderId: "335437955562",
  appId: "1:335437955562:web:3e9e87a6e11b03c54e3293",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZLCBW1tciPYbKMnbdYW_AhdNnmzE-yyA",
  authDomain: "altprodinfo.firebaseapp.com",
  projectId: "altprodinfo",
  storageBucket: "altprodinfo.appspot.com",
  messagingSenderId: "246206388931",
  appId: "1:246206388931:web:365b53b19c4b60ff1f2076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export {auth,app};
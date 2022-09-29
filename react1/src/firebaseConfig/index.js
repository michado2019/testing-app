// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjcbhYyMiZb1Bw281EnyjrU-I-28NuYcQ",
  authDomain: "testing-app-b940e.firebaseapp.com",
  projectId: "testing-app-b940e",
  storageBucket: "testing-app-b940e.appspot.com",
  messagingSenderId: "975018897581",
  appId: "1:975018897581:web:f7eaacf2737c696b3fd624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()
export {
  app, provider, signInWithRedirect, auth, getRedirectResult, onAuthStateChanged
};
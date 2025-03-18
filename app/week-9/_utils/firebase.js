// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuYcCVVlLGIQKJhbYbLWXEXQzet1NnpoM",
  authDomain: "cprg306-assignments-b5b61.firebaseapp.com",
  projectId: "cprg306-assignments-b5b61",
  storageBucket: "cprg306-assignments-b5b61.firebasestorage.app",
  messagingSenderId: "468187937307",
  appId: "1:468187937307:web:4807ff1caccbbfa33d56be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
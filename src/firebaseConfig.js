// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5hUlf9GqstJx6LWX6_ayxf21yTA9Vi7w",
  authDomain: "reactjs-coderhouse-41d82.firebaseapp.com",
  projectId: "reactjs-coderhouse-41d82",
  storageBucket: "reactjs-coderhouse-41d82.appspot.com",
  messagingSenderId: "965808354805",
  appId: "1:965808354805:web:66fd6e33f3e22f228f1cbc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

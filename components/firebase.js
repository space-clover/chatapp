// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnBZYTzyXf-OTxF5eCtAbfFTDbYSY1iCk",
  authDomain: "chat-app-f23fd.firebaseapp.com",
  projectId: "chat-app-f23fd",
  storageBucket: "chat-app-f23fd.appspot.com",
  messagingSenderId: "415934738052",
  appId: "1:415934738052:web:f00d10a2f09ee1ef031cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
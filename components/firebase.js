
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
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
export const Auth = getAuth(app)
export const db = getFirestore(app)
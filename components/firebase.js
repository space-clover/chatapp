
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const NEXT_PUBLIC_FIREBASE_API_KEY = "AIzaSyAnBZYTzyXf-OTxF5eCtAbfFTDbYSY1iCk";
const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "chat-app-f23fd.firebaseapp.com";
const NEXT_PUBLIC_FIREBASE_PROJECT_ID = "chat-app-f23fd";
const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "chat-app-f23fd.appspot.com";
const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "415934738052";
const NEXT_PUBLIC_FIREBASE_APP_ID = "1:415934738052:web:f00d10a2f09ee1ef031cd1";

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_FIREBASE_APP_ID,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)
export const db = getFirestore(app)
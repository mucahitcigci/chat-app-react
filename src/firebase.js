import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjhS-rhNRlewxUz4fdtYBskJcq9GozveY",
  authDomain: "chat-97c11.firebaseapp.com",
  projectId: "chat-97c11",
  storageBucket: "chat-97c11.appspot.com",
  messagingSenderId: "227345320379",
  appId: "1:227345320379:web:fc686081db9ce4d80a1c9e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

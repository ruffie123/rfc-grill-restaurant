// Firebase Configuration for RFC Grill
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmepcow1s8gIFnjwNcS1PSJOl8O1SesJg",
  authDomain: "rfc-grill.firebaseapp.com",
  projectId: "rfc-grill",
  storageBucket: "rfc-grill.firebasestorage.app",
  messagingSenderId: "926411441008",
  appId: "1:926411441008:web:e06ef40e5c6ecab6da05b5",
  measurementId: "G-2LNCGY98P4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;

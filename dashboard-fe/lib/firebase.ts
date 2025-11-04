// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWZw9DI0Ir0g9qKAivGYKJnxDiwV_EOjY",
  authDomain: "summit-global.firebaseapp.com",
  projectId: "summit-global",
  storageBucket: "summit-global.appspot.com",
  messagingSenderId: "499909006313",
  appId: "1:499909006313:web:598a29b451324316207178",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

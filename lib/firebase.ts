// Import Firebase core
import { initializeApp } from "firebase/app";

// 🔥 Import Firestore & Storage
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzgEM73XxcJzC4v0KgyRvFdv7fMLjMgzk",
  authDomain: "product-bcd8a.firebaseapp.com",
  projectId: "product-bcd8a",
  storageBucket: "product-bcd8a.appspot.com", // 🔴 fixed domain
  messagingSenderId: "357516559348",
  appId: "1:357516559348:web:e3662d5d372c997e232fa1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ EXPORT THESE
export const db = getFirestore(app);
export const storage = getStorage(app);

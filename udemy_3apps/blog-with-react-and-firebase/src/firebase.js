import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnSxtkfQhs8kDxPK3IsCEq8HIG_SfLSaM",
  authDomain: "blog-67605.firebaseapp.com",
  projectId: "blog-67605",
  storageBucket: "blog-67605.appspot.com",
  messagingSenderId: "1012718904816",
  appId: "1:1012718904816:web:f059c8cd6df30a5966e935"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};
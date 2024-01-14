import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_rWTB9kHQHLuQ8EKLsL_2hF9lADX0ZpE",
  authDomain: "discord-clone-udemy-98619.firebaseapp.com",
  projectId: "discord-clone-udemy-98619",
  storageBucket: "discord-clone-udemy-98619.appspot.com",
  messagingSenderId: "87172027585",
  appId: "1:87172027585:web:8da5bbf73bdbf2d1b1f040"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
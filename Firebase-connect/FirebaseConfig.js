// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmGLdWtne-XC0kQI5wGBrH0rYqwMbF_h8",
  authDomain: "signlanguage-7f551.firebaseapp.com",
  databaseURL: "https://signlanguage-7f551-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "signlanguage-7f551",
  storageBucket: "signlanguage-7f551.firebasestorage.app",
  messagingSenderId: "114094126392",
  appId: "1:114094126392:web:10eb8bcc45c1947c8e7dcd",
  measurementId: "G-5L9Y62Y5EP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(app);

export { db, database, ref, onValue };
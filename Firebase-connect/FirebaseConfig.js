import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
import { getDatabase, ref, onValue } from "firebase/database"; 

// Cấu hình Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDOzZqrBCLZYe49waH9ahhsxZDwsEL10-k",
  authDomain: "dht11-d5cba.firebaseapp.com",
  databaseURL: "https://dht11-d5cba-default-rtdb.firebaseio.com",
  projectId: "dht11-d5cba",
  storageBucket: "dht11-d5cba.firebasestorage.app",
  messagingSenderId: "822104026737",
  appId: "1:822104026737:web:dee669430efec4dfb135d0",
  measurementId: "G-PYCK08QT6P",
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app); 
const db = getFirestore(app); 
const database = getDatabase(app); 

export { auth, db, database, ref, onValue };
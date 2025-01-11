import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Thêm Authentication
import { getFirestore } from "firebase/firestore"; // Firestore
import { getDatabase, ref, onValue } from "firebase/database"; // Realtime Database

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

// Khởi tạo Firebase App
const app = initializeApp(firebaseConfig);

// Khởi tạo Firebase Services
const auth = getAuth(app); // Authentication
const db = getFirestore(app); // Firestore
const database = getDatabase(app); // Realtime Database

// Xuất các service để sử dụng trong ứng dụng
export { auth, db, database, ref, onValue };
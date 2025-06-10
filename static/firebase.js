// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-storage.js";
import { getDatabase, ref as dbRef, onValue, update } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDED0er_suruofTZnxoL54rfPwFiLbzq3s",
  authDomain: "liga-m-2247a.firebaseapp.com",
  projectId: "liga-m-2247a",
  storageBucket: "liga-m-2247a.appspot.com",
  messagingSenderId: "795730378066",
  appId: "1:795730378066:web:eeea89fbc5e31f5f798e8b",
  measurementId: "G-XYMEP2D52Y",
  databaseURL: "https://liga-m-2247a.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimeDB = getDatabase(app);

export { db, storage, realtimeDB, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, ref, uploadBytes, getDownloadURL, dbRef, onValue, update };

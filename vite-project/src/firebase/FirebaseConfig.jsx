import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7xprNMl__4jHGNElMf57bx4wuvrRi748",
    authDomain: "e-commerce-6fa25.firebaseapp.com",
    projectId: "e-commerce-6fa25",
    storageBucket: "e-commerce-6fa25.appspot.com",
    messagingSenderId: "520895903217",
    appId: "1:520895903217:web:69a1fb21b308a22172c050"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;
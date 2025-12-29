// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Updated to use fleshflowapp project with Realtime Database
// Collections: orders, products, reviews, users
const firebaseConfig = {
    apiKey: "AIzaSyB5sIvgxf0yHG2J4ck5JrNceHpHoNi0MBQ",
    authDomain: "fleshflowapp.firebaseapp.com",
    projectId: "fleshflowapp",
    storageBucket: "fleshflowapp.appspot.com",
    messagingSenderId: "62326277538",
    appId: "1:62326277538:web:75b1dfc438d3ec98cb1efb",
    databaseURL: "https://fleshflowapp-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services (Analytics is browser-only, so we skip it in backend)
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export the initialized services
export { app, db, auth, storage };

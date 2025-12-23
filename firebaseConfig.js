// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiDhHCPEO4DwuP7z1tc0YKIHvxCGYlYqs",
    authDomain: "fleshflow-bbe34.firebaseapp.com",
    projectId: "fleshflow-bbe34",
    storageBucket: "fleshflow-bbe34.appspot.com",
    messagingSenderId: "960756777432",
    appId: "1:960756777432:web:5717b721aa41b82a4272ad",
    measurementId: "G-36WV4XBDSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services (Analytics is browser-only, so we skip it in backend)
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Export the initialized services
export { app, db, auth, storage };

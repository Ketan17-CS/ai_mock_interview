// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRhBmKf9_sL3jFaFX3BbsvMpnGqrBO6Rw",
    authDomain: "prepwisw.firebaseapp.com",
    projectId: "prepwisw",
    storageBucket: "prepwisw.firebasestorage.app",
    messagingSenderId: "279428001424",
    appId: "1:279428001424:web:bab971f1691f4b90987215",
    measurementId: "G-5R98BCCGHL"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
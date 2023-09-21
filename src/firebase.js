// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKwRIGR2mMKhnNRONTc3XPjVv5J8JowsE",
  authDomain: "e-adaalat.firebaseapp.com",
  databaseURL: "https://e-adaalat-default-rtdb.firebaseio.com",
  projectId: "e-adaalat",
  storageBucket: "e-adaalat.appspot.com",
  messagingSenderId: "927141470443",
  appId: "1:927141470443:web:00ae6edbd54c5c59641eae",
  measurementId: "G-TY4P40DTV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export const auth = getAuth(app);
export {firestore};
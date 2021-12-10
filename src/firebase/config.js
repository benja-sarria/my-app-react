// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMMObvRJASvdYiXndFnkdNwjsRAHw8DiU",
    authDomain: "planet-sushi-ecommerce-react.firebaseapp.com",
    projectId: "planet-sushi-ecommerce-react",
    storageBucket: "planet-sushi-ecommerce-react.appspot.com",
    messagingSenderId: "267320835730",
    appId: "1:267320835730:web:437f682a9087be07a3304b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// todo lo que viene en app, saco la firestore database y la exporto
export const database = getFirestore(app);

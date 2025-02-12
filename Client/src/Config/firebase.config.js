// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF6a3j0lgKMXAihFdno4jC4oKaxsCUkqc",
  authDomain: "todo-e29da.firebaseapp.com",
  projectId: "todo-e29da",
  storageBucket: "todo-e29da.firebasestorage.app",
  messagingSenderId: "810156161659",
  appId: "1:810156161659:web:99d1fee0d44f284c2300de",
  measurementId: "G-Q8P8DJLR50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
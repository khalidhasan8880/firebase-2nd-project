// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBynqUcWHCrB0LurVnicmpqa64zXzd0kgc",
  authDomain: "fir-tow-project.firebaseapp.com",
  projectId: "fir-tow-project",
  storageBucket: "fir-tow-project.appspot.com",
  messagingSenderId: "114095821692",
  appId: "1:114095821692:web:5b8d41b8829a5ba4b74af9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
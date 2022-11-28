// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfyAwSVgiI6RJ-vDZZjPTMr6IqJpUkxIc",
  authDomain: "genius-car-fe2ca.firebaseapp.com",
  projectId: "genius-car-fe2ca",
  storageBucket: "genius-car-fe2ca.appspot.com",
  messagingSenderId: "151206235214",
  appId: "1:151206235214:web:ed540f0e08e93e5e3b871f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
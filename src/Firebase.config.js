import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxNJkQYINGgonKxiY_YK2WaMkt8PM5Plw",
  authDomain: "home-seekers-project.firebaseapp.com",
  projectId: "home-seekers-project",
  storageBucket: "home-seekers-project.appspot.com",
  messagingSenderId: "91727771241",
  appId: "1:91727771241:web:1889d9ab6f717d7a3314f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBQVUk5R1hoXdMyLjTruJlveIxJQ1XKsQU",
    authDomain: "circleup-1ba0c.firebaseapp.com",
    projectId: "circleup-1ba0c",
    storageBucket: "circleup-1ba0c.appspot.com",
    messagingSenderId: "489348467368",
    appId: "1:489348467368:web:70b7ccafbd9bbd75e3109d",
    measurementId: "G-WC4XXYX27W"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};
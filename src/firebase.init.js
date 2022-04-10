// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOcSft39MNaoLxkybPN80nMz9IuGd7pSA",
  authDomain: "ema-john-simple-6ff77.firebaseapp.com",
  projectId: "ema-john-simple-6ff77",
  storageBucket: "ema-john-simple-6ff77.appspot.com",
  messagingSenderId: "348976303787",
  appId: "1:348976303787:web:3b518ea88b728096d7b1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
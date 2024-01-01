// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPbo1qVsRFWK-No1G9CyazbUhFVNEOrKo",
  authDomain: "react-tut-fb9ec.firebaseapp.com",
  projectId: "react-tut-fb9ec",
  storageBucket: "react-tut-fb9ec.appspot.com",
  messagingSenderId: "347989956161",
  appId: "1:347989956161:web:e07f2cc8a446a731d7d8c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
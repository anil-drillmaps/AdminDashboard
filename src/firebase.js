// Import the functions you need from the SDKs you need
import { getFirestore} from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALtUILNi9R3pkaxW8SCdIlWS10zz4KI68",
  authDomain: "admindashboard-5dd8b.firebaseapp.com",
  projectId: "admindashboard-5dd8b",
  storageBucket: "admindashboard-5dd8b.appspot.com",
  messagingSenderId: "878461093787",
  appId: "1:878461093787:web:6512ef59ad4a75658fc33e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DB = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzH4RqLAQJh3g0jXG9P27xRHHafmJY7a8",
  authDomain: "netflixgpt-e0980.firebaseapp.com",
  projectId: "netflixgpt-e0980",
  storageBucket: "netflixgpt-e0980.appspot.com",
  messagingSenderId: "1040593832131",
  appId: "1:1040593832131:web:6e86a39f38d1018ec6ba76",
  measurementId: "G-7DP15Y89X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();



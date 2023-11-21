// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCjKunvBqyaAALdrlhGBMHnLpB0oozBp1M",
  authDomain: "netflix-clone-45880.firebaseapp.com",
  projectId: "netflix-clone-45880",
  storageBucket: "netflix-clone-45880.appspot.com",
  messagingSenderId: "145145134799",
  appId: "1:145145134799:web:5252a487a50234af0141ba",
  measurementId: "G-2NMTDHSW2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


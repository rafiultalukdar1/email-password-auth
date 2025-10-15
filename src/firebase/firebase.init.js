// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4MnTjS1ks4-DHm2_EPPKvWM6q9upLHfI",
  authDomain: "email-password-auth-86052.firebaseapp.com",
  projectId: "email-password-auth-86052",
  storageBucket: "email-password-auth-86052.firebasestorage.app",
  messagingSenderId: "694001634935",
  appId: "1:694001634935:web:2e66a3b265abf9384e0072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
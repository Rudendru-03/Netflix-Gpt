// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABczmZ3mpT2NVOs8Bxsej7coO3s46X_3U",
  authDomain: "netflix-gpt-4bfe5.firebaseapp.com",
  projectId: "netflix-gpt-4bfe5",
  storageBucket: "netflix-gpt-4bfe5.appspot.com",
  messagingSenderId: "87040193717",
  appId: "1:87040193717:web:4a1a6dd1bb1b4633d03afc",
  measurementId: "G-0TYE9ZC28L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

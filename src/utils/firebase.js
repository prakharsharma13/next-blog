// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-7e452.firebaseapp.com",
  projectId: "blog-7e452",
  storageBucket: "blog-7e452.appspot.com",
  messagingSenderId: "163991338310",
  appId: "1:163991338310:web:cd03e72f2782728bb17947"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
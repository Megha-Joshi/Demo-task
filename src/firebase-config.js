import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCoJ5ilw54lf49nYPU1rQZDM46oZcHeKzE",
    authDomain: "fir-task-82644.firebaseapp.com",
    projectId: "fir-task-82644",
    storageBucket: "fir-task-82644.appspot.com",
    messagingSenderId: "1031004701594",
    appId: "1:1031004701594:web:11198d9441236c83a4f023",
    measurementId: "G-5CFFKEECXF"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const auth = getAuth(app);
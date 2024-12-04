// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXvnugU1PPzMeUWyqw_13ozYZa6uTtmdw",
  authDomain: "dindar-patro-patri-b8013.firebaseapp.com",
  databaseURL: "https://dindar-patro-patri-b8013-default-rtdb.firebaseio.com",
  projectId: "dindar-patro-patri-b8013",
  storageBucket: "dindar-patro-patri-b8013.firebasestorage.app",
  messagingSenderId: "661958209772",
  appId: "1:661958209772:web:f62fc0617722e57e87f5c9",
  measurementId: "G-1KMMWWDHLH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

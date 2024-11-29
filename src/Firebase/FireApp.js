// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG_muNPHRXmn_NEs5w9BifMY6COuWXkdo",
  authDomain: "trashtalkin-trex.firebaseapp.com",
  projectId: "trashtalkin-trex",
  storageBucket: "trashtalkin-trex.firebasestorage.app",
  messagingSenderId: "108380824489",
  appId: "1:108380824489:web:a85d5a6629b7c5fea65ab8",
  measurementId: "G-CR7022QK3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app
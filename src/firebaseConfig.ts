import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1xowJbaVGvPwkfy7_Hz6Df7yPginGT9Q",
  authDomain: "sample-project-4fe61.firebaseapp.com",
  projectId: "sample-project-4fe61",
  storageBucket: "sample-project-4fe61.appspot.com",
  messagingSenderId: "684116662052",
  appId: "1:684116662052:web:996efa3e499bcac7bf85b1",
  measurementId: "G-GV6R0VWJ61",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

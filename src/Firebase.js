import firebase from "firebase";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj3DlFi7ySrkgNlOLOxFTV3z7_EFw-YVg",
  authDomain: "linkedinclone-512d9.firebaseapp.com",
  projectId: "linkedinclone-512d9",
  storageBucket: "linkedinclone-512d9.appspot.com",
  messagingSenderId: "814548774063",
  appId: "1:814548774063:web:529ab402599021e677785a",
};

// This code will connect to everything
const firebaseApp = firebase.initializeApp(firebaseConfig);

// get the firebase database

const db = firebaseApp.firestore();

const auth =  firebaseApp.auth();

export { db, auth };

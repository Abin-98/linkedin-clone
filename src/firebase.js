import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWl-poHfIb0sz2fczPiHjp_KaS4x8BoNc",
    authDomain: "linkedin-clone-18fa0.firebaseapp.com",
    projectId: "linkedin-clone-18fa0",
    storageBucket: "linkedin-clone-18fa0.appspot.com",
    messagingSenderId: "426068497019",
    appId: "1:426068497019:web:19b6f93d8350cdbd0148de"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db, auth};
import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyCvJA4h_5aipEdMW-UoBIJMDzKq5H_53Ss",
    authDomain: "unichat-28daf.firebaseapp.com",
    projectId: "unichat-28daf",
    storageBucket: "unichat-28daf.appspot.com",
    messagingSenderId: "541004161559",
    appId: "1:541004161559:web:2fb84a5e1d4d4884a2b252"
}).auth();
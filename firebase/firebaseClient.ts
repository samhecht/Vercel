import { initializeApp } from "@firebase/app"
import "firebase/auth";
import "firebase/firestore";  

// INITIALIZE firebase
const firebaseConfig = {
    apiKey: process.env.FIRESTORE_API_KEY,
    authDomain: "protean-keyword-326516.firebaseapp.com",
    projectId: "protean-keyword-326516",
    storageBucket: "protean-keyword-326516.appspot.com",
    messagingSenderId: "852906376122",
    appId: "1:852906376122:web:bba9be0c5f42521f18bb83",
    measurementId: "G-P5PEMYT2BF"
};


const fbApp = initializeApp(firebaseConfig);

export default fbApp;


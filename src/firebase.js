// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyAPYqYknQhbtYEiV9YF84ZXyfGpFpHrjkE",

    authDomain: "rguktin-9de0f.firebaseapp.com",

    projectId: "rguktin-9de0f",

    storageBucket: "rguktin-9de0f.appspot.com",

    messagingSenderId: "198000302384",

    appId: "1:198000302384:web:1cb21e7ed1271d84fc90f5"

};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
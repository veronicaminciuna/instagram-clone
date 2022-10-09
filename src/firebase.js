// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDm1DxXbrba8L06XBKyIntugmJVMIiGZng",
    authDomain: "instagram-clone-7b8b0.firebaseapp.com",
    projectId: "instagram-clone-7b8b0",
    storageBucket: "instagram-clone-7b8b0.appspot.com",
    messagingSenderId: "1039056979971",
    appId: "1:1039056979971:web:00f4f6336c413814fde636"
};


// const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);


export {db, auth, storage};
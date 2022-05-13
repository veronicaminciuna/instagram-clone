// import firebase from 'firebase'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDm1DxXbrba8L06XBKyIntugmJVMIiGZng",
    authDomain: "instagram-clone-7b8b0.firebaseapp.com",
    projectId: "instagram-clone-7b8b0",
    storageBucket: "instagram-clone-7b8b0.appspot.com",
    messagingSenderId: "1039056979971",
    appId: "1:1039056979971:web:00f4f6336c413814fde636"
};

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// export {db, auth, storage};
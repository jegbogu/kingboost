// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBflkMcsS1WTr5BrL77jnpHJPE2jarLa1c",
    authDomain: "tandbuy-5a94d.firebaseapp.com",
    projectId: "tandbuy-5a94d",
    storageBucket: "tandbuy-5a94d.appspot.com",
    messagingSenderId: "1085488209005",
    appId: "1:1085488209005:web:380c534e8e15072e9bf364",
    measurementId: "G-1W34B0QSJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore()

export { auth, db } 




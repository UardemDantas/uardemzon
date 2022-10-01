import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAE4k-UtAoDbhi4HFl8SNiB4o9QrB9OrxA",
    authDomain: "clone-uardem.firebaseapp.com",
    projectId: "clone-uardem",
    storageBucket: "clone-uardem.appspot.com",
    messagingSenderId: "708605053239",
    appId: "1:708605053239:web:1b61f7b0aedafaea8832b2",
    measurementId: "G-ZGNNL2LWDH"
 })


const auth = firebase.auth();

export { auth }
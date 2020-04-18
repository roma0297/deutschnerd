import * as firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

export const firebaseConfig = {
    apiKey: "AIzaSyDK25D1h8t_xPw0wzm8Uig9l35_AwokAeU",
    authDomain: "dn-application.firebaseapp.com",
    databaseURL: "https://dn-application.firebaseio.com",
    projectId: "dn-application",
    storageBucket: "dn-application.appspot.com",
    messagingSenderId: "708531330448",
    appId: "1:708531330448:web:1290717a45f4b3a3a56715",
    measurementId: "G-VHRZXJV67L"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()


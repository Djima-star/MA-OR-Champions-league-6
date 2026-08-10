// ================================
// FIREBASE - MA'OR CHAMPIONS LEAGUE
// ================================

import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Configuration Firebase

const firebaseConfig = {

    apiKey: "AIzaSyBcARMNpu2Hh92lGP68icBTZV2a_XGYrfc",

    authDomain:
        "ma-or-champions-league.firebaseapp.com",

    projectId:
        "ma-or-champions-league",

    storageBucket:
        "ma-or-champions-league.firebasestorage.app",

    messagingSenderId:
        "524486036430",

    appId:
        "1:524486036430:web:b49ee45b8062bae5d3399f",

    measurementId:
        "G-LFVG51W3V4"
};


// Initialiser Firebase

const app =
    initializeApp(firebaseConfig);


// Initialiser Firestore

const db =
    getFirestore(app);


// Exporter

export {

    db,

    collection,

    addDoc,

    getDocs,

    query,

    orderBy,

    onSnapshot,

    doc,

    updateDoc,

    deleteDoc

};

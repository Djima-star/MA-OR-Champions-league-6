// Firebase SDK
import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    push,
    set,
    onValue,
    update,
    remove
} from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcARMNpu2Hh92lGP68icBTZV2a_XGYrfc",
    authDomain: "ma-or-champions-league.firebaseapp.com",
    projectId: "ma-or-champions-league",
    storageBucket: "ma-or-champions-league.firebasestorage.app",
    messagingSenderId: "524486036430",
    appId: "1:524486036430:web:b49ee45b8062bae5d3399f",
    measurementId: "G-LFVG51W3V4"
};


// Initialisation Firebase
const app = initializeApp(firebaseConfig);


// Connexion Realtime Database
const database = getDatabase(app);


// Exportation
export {
    database,
    ref,
    push,
    set,
    onValue,
    update,
    remove
};

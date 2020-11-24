
// firebase
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// firebase services
import 'firebase/functions';


// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCcuxH9g_B_0Ak8nFdsma4OzMO13aGqUzw",
    authDomain: "in-car-entertainment.firebaseapp.com",
    databaseURL: "https://in-car-entertainment.firebaseio.com",
    projectId: "in-car-entertainment",
    storageBucket: "in-car-entertainment.appspot.com",
    messagingSenderId: "1020045241560",
    appId: "1:1020045241560:web:f4dcce8d255303533dfbad"
};


// initialize firebase
if (!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);


// firebase service exports
export const functions = firebase.functions();


// if (window.location.hostname === 'localhost')
//     functions.useEmulator('localhost', 5001);


export { firebase };
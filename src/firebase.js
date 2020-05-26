import firebase from 'firebase';
import 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyDXBS78g4AFSXlAL3YneRzxw9QNdF3DAIs",
    authDomain: "calculator-app-a427d.firebaseapp.com",
    databaseURL: "https://calculator-app-a427d.firebaseio.com",
    projectId: "calculator-app-a427d",
    storageBucket: "calculator-app-a427d.appspot.com",
    messagingSenderId: "1064653458586",
    appId: "1:1064653458586:web:5893431b6552a97590a323"
};


// Initialize Firebase
firebase.initializeApp(config);

// Firebase utils
const db = firebase.database();
const auth = firebase.auth();


// Database references
const namesRef = db.ref("names");

export {
    db,
    auth,
    namesRef
}

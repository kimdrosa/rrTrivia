import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDg-tOKM0bDYI5JkPWsv_CpkpkVE7p3PkU",
    authDomain: "rrtrivia.firebaseapp.com",
    projectId: "rrtrivia",
    storageBucket: "rrtrivia.appspot.com",
    messagingSenderId: "83676546949",
    appId: "1:83676546949:web:c94a5cfe7c8b1443e226ec",
    measurementId: "G-NETL2F0MJ1"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
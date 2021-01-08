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
  // const userRef = firestore.doc(`users/${user.uid}`);
  // const snapshot = await userRef.get();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  }

  // const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
  //   event.preventDefault();
  //   try{
  //     const {user} = await auth.createUserWithEmailAndPassword(email, password);
  //     generateUserDocument(user, {displayName});
  //   }
  //   catch(error){
  //     setError('Error Signing up with email and password');
  //   }

  //   setEmail("");
  //   setPassword("");
  //   setDisplayName("");
  // };

  
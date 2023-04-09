import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBLtVx_4uglfxaAShvlNkXLHv8uXYVxB1Q",
  authDomain: "crwn-db-2319a.firebaseapp.com",
  projectId: "crwn-db-2319a",
  storageBucket: "crwn-db-2319a.appspot.com",
  messagingSenderId: "641723716330",
  appId: "1:641723716330:web:5b0a04c107e7a3a61a3d93",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

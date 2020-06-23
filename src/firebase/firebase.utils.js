import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOnWuKqZIhwvOhH_ic-lsbPaEt6blxbXo",
  authDomain: "e-commercereact.firebaseapp.com",
  databaseURL: "https://e-commercereact.firebaseio.com",
  projectId: "e-commercereact",
  storageBucket: "e-commercereact.appspot.com",
  messagingSenderId: "909897067298",
  appId: "1:909897067298:web:4aed7799cb3a1ae736d37b",
  measurementId: "G-KFW01JVE8J",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

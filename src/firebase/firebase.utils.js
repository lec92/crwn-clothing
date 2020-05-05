import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB0lmtHjdIXBEgwX5UqnMQ7FNOZr8Sx2-o",
  authDomain: "crwn-db-e790d.firebaseapp.com",
  databaseURL: "https://crwn-db-e790d.firebaseio.com",
  projectId: "crwn-db-e790d",
  storageBucket: "crwn-db-e790d.appspot.com",
  messagingSenderId: "397544789148",
  appId: "1:397544789148:web:54cd7d836c8a4918934959",
  measurementId: "G-KH7YJPDKJV",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

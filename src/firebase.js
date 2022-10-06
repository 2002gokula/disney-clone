import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import { initializeApp } from "firebase/app"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ-_1Lh7Y06nTmqBRXYkzXi7tz-kXLPbI",
  authDomain: "disney-clone-ac263.firebaseapp.com",
  databaseURL: "https://disney-clone-ac263-default-rtdb.firebaseio.com",
  projectId: "disney-clone-ac263",
  storageBucket: "disney-clone-ac263.appspot.com",
  messagingSenderId: "1072725753931",
  appId: "1:1072725753931:web:29c8a09b2ad9b9f2984dce",
  measurementId: "G-VSVJYJTF45",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db

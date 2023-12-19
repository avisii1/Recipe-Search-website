import { initializeApp } from "firebase/app"
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut } from "firebase/auth"

import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD2O2scfPmhZsK44l4fLAqYTbOVRbO_Hfo",
    authDomain: "recipe-bee90.firebaseapp.com",
    projectId: "recipe-bee90",
    storageBucket: "recipe-bee90.appspot.com",
    messagingSenderId: "597217659287",
    appId: "1:597217659287:web:c257d69d40ef6894f69cd2"
  };
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)

const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)

const logOut = () => signOut(auth)

const addData = (tableName, data) => addDoc(collection(db, tableName), data)

const getDataWhere = (tableName, column, operator, value) => getDocs(query(collection(db, tableName), where(column, operator, value)))

export {registerUser, loginUser, logOut, addData, getDataWhere}

export default app
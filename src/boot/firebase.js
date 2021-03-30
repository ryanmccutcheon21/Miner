import firebase from "firebase/app"
import "firebase/analytics"

import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvboIPbWWOoCWxOdIZYiix7r5i6YBxbSs",
  authDomain: "miner-b157b.firebaseapp.com",
  projectId: "miner-b157b",
  storageBucket: "miner-b157b.appspot.com",
  messagingSenderId: "584992743256",
  appId: "1:584992743256:web:a59dd952b10ac7caa54f2d",
  measurementId: "G-Q5VR1FKCEQ"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db 
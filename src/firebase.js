import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAB6uFY6UIft_JO_86QoBsNgPNE__uB_Js",
  authDomain: "react-redux-firebase-aut-2e1a6.firebaseapp.com",
  projectId: "react-redux-firebase-aut-2e1a6",
  storageBucket: "react-redux-firebase-aut-2e1a6.appspot.com",
  messagingSenderId: "726406724654",
  appId: "1:726406724654:web:b98bf73c904340f079f3bf"
};

const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider}
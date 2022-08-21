// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrg-u290Z5b_ZpTPLdCCRL9Fyqe6fWOCU",
  authDomain: "slack-clone-a4014.firebaseapp.com",
  projectId: "slack-clone-a4014",
  storageBucket: "slack-clone-a4014.appspot.com",
  messagingSenderId: "663553117699",
  appId: "1:663553117699:web:d0811f11bfee9bed3fc836",
  measurementId: "G-T4ZNZW81K8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth =firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider() ;

export {auth,provider} ;
export default db;
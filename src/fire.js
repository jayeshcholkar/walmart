// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmAeq_kw0xIHW4BRe3LuHeAVkEowgHjAU",
  authDomain: "log-in-c417a.firebaseapp.com",
  projectId: "log-in-c417a",
  storageBucket: "log-in-c417a.appspot.com",
  messagingSenderId: "281937671636",
  appId: "1:281937671636:web:f72944fa6014ecc7a61241"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
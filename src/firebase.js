// Import the functions you need from the SDKs you need
import firebase from "firebase";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnJ6EBQzToMa4T3BiTPQlO-SBVNHd_4Kc",
  authDomain: "placement-system-acharya.firebaseapp.com",
  projectId: "placement-system-acharya",
  storageBucket: "placement-system-acharya.appspot.com",
  messagingSenderId: "157509951321",
  appId: "1:157509951321:web:e60ca041921206e2d6b648",
  measurementId: "G-GHP1EKNQKG"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// export const auth = getAuth(app);


firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
export const firebaseAuth = firebase.auth();
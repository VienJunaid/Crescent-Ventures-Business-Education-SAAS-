// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKeiJEXeFAOuLQXalfyyc86U4PF60Kejw",
  authDomain: "ai-flash-a31ff.firebaseapp.com",
  projectId: "ai-flash-a31ff",
  storageBucket: "ai-flash-a31ff.appspot.com",
  messagingSenderId: "495199228655",
  appId: "1:495199228655:web:2f37e336acfe7bf114c11a",
  measurementId: "G-MHQMRY66N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default db;
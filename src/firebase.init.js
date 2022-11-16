// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVuPXJ4DrTbfd482KtSDcQQ1-a6D9GzTA",
  authDomain: "young-fashion1.firebaseapp.com",
  projectId: "young-fashion1",
  storageBucket: "young-fashion1.appspot.com",
  messagingSenderId: "80160766336",
  appId: "1:80160766336:web:f38cfce332eae25467e965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
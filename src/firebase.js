// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
import {getStorage}from "firebase/storage"
import {getAuth , GoogleAuthProvider ,signInWithPopup ,signInWithRedirect}  from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyACuG1Ba8z-OoPdkvZGPoxgbQtT3OGHffI",
  authDomain: "ilibrary-e21fd.firebaseapp.com",
  databaseURL: "https://ilibrary-e21fd-default-rtdb.firebaseio.com",
  projectId: "ilibrary-e21fd",
  storageBucket: "ilibrary-e21fd.appspot.com",
  messagingSenderId: "736146610354",
  appId: "1:736146610354:web:2a32d58301ed5e3fe951ab",
  measurementId: "G-NXG3YC3TFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getDatabase(app);
export const storage=getStorage(app);
export const auth=getAuth(app);
const provider=new GoogleAuthProvider()


export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{


        const name=result.user.displayName;
        const email=result.user.email;
        const photo=result.user.photoURL;

        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        localStorage.setItem("photo",photo);
        window.location.reload();

    }).catch((error)=>{

        console.log(error);

    });
}
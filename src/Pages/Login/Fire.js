// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from "react";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBmTi7EjjHl-tZNszo-ngnLgQYq8sgIPxg",
  authDomain: "hostwire-login.firebaseapp.com",
  projectId: "hostwire-login",
  storageBucket: "hostwire-login.appspot.com",
  messagingSenderId: "661154474176",
  appId: "1:661154474176:web:83029dc13e1b7c45ea6525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

export function Signup(email,password){

    return createUserWithEmailAndPassword(auth,email,password)

}

export function Login(email,password){

    return signInWithEmailAndPassword(auth,email,password)

}

export function useAuth(){
    const [currentUser,setcurrentUser]=useState();

    useEffect(()=>{
       const unsub= onAuthStateChanged(auth, user =>setcurrentUser(user));
       return unsub;
    },[])
    return currentUser;
}

export function Logout(){
    signOut(auth)
}






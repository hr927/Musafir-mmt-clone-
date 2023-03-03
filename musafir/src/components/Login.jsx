import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/AuthReducer/auth.actions";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import LogginButton from "./LogginButton";

firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyBprMmCLTqRrEhdekCtn5-gZCo942orqxQ",
  authDomain: "musafir-431a8.firebaseapp.com",
  projectId: "musafir-431a8",
  storageBucket: "musafir-431a8.appspot.com",
  messagingSenderId: "633912145217",
  appId: "1:633912145217:web:cf1d41f99ef59d3b28ddc0",
  measurementId: "G-J0SQ8N8DKQ",
});
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default function Login() {
  const dispatch = useDispatch();
  const SignInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        dispatch(loginAction(res.user.providerData));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <LogginButton SignInWithGoogle={SignInWithGoogle}></LogginButton>;
}

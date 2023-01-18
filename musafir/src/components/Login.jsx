import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/AuthReducer/auth.actions";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import LogginButton from "./LogginButton";
require("dotenv").config({ path: ".../.env" });

firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default function Login() {
  const dispatch = useDispatch();
  const SignInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        console.log(res.user);
        const { displayName, email } = res.user;
        console.log(displayName, email);
        dispatch(loginAction(res.user.providerData));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login-buttons">
      <LogginButton SignInWithGoogle={SignInWithGoogle}></LogginButton>
    </div>
  );
}

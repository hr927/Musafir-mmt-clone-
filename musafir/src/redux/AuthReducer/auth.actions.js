import { LOGIN, LOGOUT } from "./auth.types"
import firebase from "firebase/compat/app";
import { signInWithEmailAndPassword, getAuth} from "firebase/auth";
import axios from "axios"

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

const firebaseAuth = getAuth();


export const loginAction=(payload)=>async(dispatch)=>{
  Post(payload[0])
dispatch({
        type:LOGIN,
        payload:payload
      })
}

export const logoutAction=()=>{
    return {
        type:LOGOUT
    }
}

export function signup(email, password) {
    return async (dispatch, getState) => {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log("success")
        // Dispatch a success action
        Post({email})
      } catch (error) {
        // Dispatch an error action
      }
    };
  }

  export function manualSignin(email, password) {
    return async (dispatch, getState) => {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        // Dispatch a success action
        dispatch({type:LOGIN,
         payload:[{email:email,displayName:email}]
        })
      } catch (error) {
        // Dispatch an error action
        console.log("incorrect Credentials")
      }
    };
  }

  function Post(data){
    axios.post(`http://localhost:5000/users`,data)
    .then((res)=>console.log("added to admin side"))
  }
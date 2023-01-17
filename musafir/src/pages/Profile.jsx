import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../components/Login";
import { loginAction, logoutAction } from "../redux/AuthReducer/auth.actions";


const Profile = () => {
    const dispatch = useDispatch();

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logoutAction());
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      Profile
      <button className="logout-button" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default Profile;

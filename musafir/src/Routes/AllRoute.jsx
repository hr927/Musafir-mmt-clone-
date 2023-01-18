import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};
//You can change the homepage as per your requirement

export default AllRoute;

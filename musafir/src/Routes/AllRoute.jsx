// import { Hotel } from '@mui/icons-material'
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import BuyGifts from "../pages/BuyGifts";
import Destinations from "../pages/Destinations";

import Flights from "../pages/flights/Flights";
import Gifts from "../pages/Gifts";
import { Home } from "../pages/Home/Home";

import Hotel from "../pages/hotels/Hotel";

import Profile from "../pages/Profile";
import Where from "../pages/Where";
import PrivateRoute from "./PrivateRoute";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/hotel" element={<Hotel />}></Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        }
      ></Route>
      <Route path="/flight" element={<Flights />}></Route>
      <Route path="/where" element={<Where />}></Route>
      <Route path="/where/:id" element={<Destinations />}></Route>
      <Route path="/gift-cards" element={<Gifts />}></Route>
      <Route path="/gift-cards/:id" element={<BuyGifts />}></Route>
    </Routes>
  );
};
//You can change the homepage as per your requirement

export default AllRoute;

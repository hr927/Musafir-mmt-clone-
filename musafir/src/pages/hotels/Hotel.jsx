import {
  Autocomplete,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import hotels from "../../hotel.json";
import Citycard from "./Citycard";
import Modals from "./Modal";
const cities = [
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Surat",
  "Jaipur",
];

const Hotel = () => {
  const [value, setValue] = useState(cities[0]);
  const [Data, setData] = useState([]);
  const [reset, setreset] = useState(true);
  // let input = value;

  React.useEffect(() => {
    let mumbaiData = Object.keys(hotels)
      .filter((key) => key === value)
      .map((key) => hotels[key]);
    setData(mumbaiData[0]);
  }, [reset, value]);

  function Filter(value1, value2) {
    let temp = Object.keys(hotels)
      .filter((key) => key === value)
      .map((key) => hotels[key]);

    let filteredData = temp[0].filter((el) => {
      let x = +el.discprice.split(",").map(String).join("");

      return x > value1 && x !== "" && x < value2;
    });
    setData(filteredData);
  }

  return (
    <>
      <Box
        style={{
          backgroundColor: "aliceblue",
          width: "100%",
          height: "70px",

          top: "105px",
          display: "flex",
          position: "fixed",
          padding: "10px",
        }}
      >
        <FormControl sx={{ color: "white", fontSize: "10px", padding: "10px" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ width: 300 }}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField
                style={{ color: "red" }}
                {...params}
                label="city are or property"
              />
            )}
          />
        </FormControl>
        <Modals Filter={Filter} />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "90%",
          gap: "10px",
          margin: "auto",
          marginTop: "200px",
        }}
      >
        <Box
          sx={{
            padding: "5px",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
          }}
        >
          <Typography
            sx={{
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "22px",
              fontWeight: 700,
              lineHeight: "22px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h6"
          >
            Select Filters
          </Typography>
          <Typography
            sx={{
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h6"
          >
            Suggested For You
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Free Cancellation (156)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Breakfast Included (75)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Breakfast + Lunch/Dinner Included (13)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> All Meals Included (3)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> EMI Deals Available (8)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Pay @ Hotel Available (1)
          </label>

          <Typography
            sx={{
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h6"
          >
            Price (per night)
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              onChange={(e) => {
                e.target.checked ? Filter(0, 2000) : setreset(!reset);
              }}
              type="checkbox"
            />{" "}
            ₹ 0 - ₹ 2000 (62)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? Filter(2000, 3500) : setreset(!reset);
              }}
            />{" "}
            ₹ 2000 - ₹ 3500 (57)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? Filter(3500, 7500) : setreset(!reset);
              }}
            />{" "}
            ₹ 3500 - ₹ 7500 (42)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? Filter(7500, 11500) : setreset(!reset);
              }}
            />{" "}
            ₹ 7500 - ₹ 11500 (2)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? Filter(11500, 15000) : setreset(!reset);
              }}
            />{" "}
            ₹ 11500 - ₹ 15000 (0)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? Filter(15000, 30000) : setreset(!reset);
              }}
            />{" "}
            ₹ 15000 - ₹ 30000 (1)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? Filter(30000, 70000) : setreset(!reset);
              }}
            />{" "}
            ₹ 30000+ (0)
          </label>

          <Typography
            sx={{
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h6"
          >
            Star Category
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />5 star (16)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            4.5 & above (Excellent)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />4 & above (Very Good)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />3 & above (Good) (338)
          </label>

          <Typography
            sx={{
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h6"
          >
            Property Type
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Hotel (411)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Apartment (48)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Homestay (17)
          </label>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h6"
          >
            Hotel Chains
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Accor - Novotel & ibis
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Clarks Inn
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Concept Hospitality
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Ginger Hotels
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Hilton & Doubletree
          </label>

          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Hyatt
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Breakfast Included (75)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> IHG - Crowne Plaza, Holiday Inn &
            Intercontinental
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Lemon Tree
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Marriott, Westin & Le Meridien
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Orange Tiger
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Orange Tiger
          </label>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h5"
          >
            Guests Love{" "}
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Swimming Pool (52)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Wi-Fi (448)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Spa (35)"
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> ₹ 11500 - ₹ 15000 (0)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> ₹ 15000 - ₹ 30000 (1)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> ₹ 30000+ (0)
          </label>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h5"
          >
            Booking Preference
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Entire Property (32)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Caretaker (176)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Instant Book (531)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Homestays (85)
          </label>

          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "RGB(0, 0, 0)",
            }}
            variant="h5"
          >
            House Rules
          </Typography>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Pets Allowed (68)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> Bachelors Allowed (472)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Smoking Allowed (261)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" />
            Allows Unmarried Couples (412)
          </label>
          <label
            style={{
              padding: "5px",
              fontFamily: "Lato",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              color: "rgb(74, 74, 74)",
            }}
          >
            <input type="checkbox" /> ₹ 3500 - ₹ 7500 (42)
          </label>

          {/* <label style={{padding:"5px",fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)'}}>
            <input type="checkbox" /> ₹ 7500 - ₹ 11500 (2)
          </label>
          <label style={{padding:"5px",fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)'}}>
            <input type="checkbox" /> ₹ 11500 - ₹ 15000 (0)
          </label>
          <label style={{padding:"5px",fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)'}}>
            <input type="checkbox" /> ₹ 15000 - ₹ 30000 (1)
          </label>
          <label style={{padding:"5px",fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)'}}>
            <input type="checkbox" /> ₹ 30000+ (0)
          </label> */}

          {/* </Box> */}
        </Box>

        <Box
          sx={{
            width: "90%",
          }}
        >
          {Data.map((e) => (
            <Citycard
              key={e.id}
              price={e.grayText}
              dscprice={e.discprice}
              name={e.blueText}
              image={e.img}
              imgThumb1={e.imgThumb1}
              imgThumb2={e.imgThumb2}
              imgThumb3={e.imgThumb3}
              imgThumb4={e.imgThumb4}
              rating={e.rating}
              ratingText={e.ratingText}
              location={e.pc__html}
              location2={e.wordBreak}
              item={e.persuasion__item}
              cancellation={e.cancellation}
              freecancellation={e.freecanc}
              pernight={e.font10}
              tax={e.tax}
              offer={e.offer}
              ratingcount={e.blackText}
              text={e.font11}
              value1={e.value1}
              value2={e.value2}
              value3={e.value3}
              value4={e.value4}
              value5={e.value5}
            />
          ))}
        </Box>
        {/* </Box> */}
      </Box>
    </>
  );
};

export default Hotel;

import { Alert, AlertTitle, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import hotels from "../../hotel.json"
import Citycard from "./Citycard"
// import Navbar from "./Hotelnavbar"
// import MaterialUIPickers from "./Calender"
import CheckboxComponent from "./Input"
const Hotel = () => {
  const [mumbai, setMumbai] = useState(hotels.mumbai)
  const [pune, setpune] = useState(hotels.pune)
  const [delhi, setdelhi] = useState(hotels.delhi)
  const [nagpur, setnagpur] = useState(hotels.nagpur)

  const [value, setValue] = useState("mumbai");

  const [data, setdata] = useState([])
  console.log(mumbai)
  console.log(pune)
  // console.log(delhi)

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // make api call with search term
  };
  const handleclick = () => {

  }
  return (<>
    {/* <Navbar/> */}
    {/* <Flex>   </Flex> */}
    <Box>
      <FormControl style={{ marginTop: "1rem" }}>
        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select City"
          onChange={handleChange}
        >
          <MenuItem value={"delhi"}>Delhi</MenuItem>
          <MenuItem value={"mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"nagpur"}>Nagpur</MenuItem>
          <MenuItem value={"pune"}>Pune</MenuItem>
        </Select>
        {/* <MaterialUIPickers/> */}

      </FormControl>
    </Box>


    <Box style={{
      display: 'flex',
     
      justifyContent: 'space-around',
      
    }} >
      {/* input box data */}
      <Box >
        <Box style={{
          // width:"40%",
           fontSize: "100px" ,
          display: 'flex',
          flexDirection: 'column',
          // flexWrap: 'nowrap',
          // justifyContent: 'space-between',
          alignContent: 'flex-start',
          
         
        }} >
          <Typography style={{ fontSize: "20px"}} variant="h5">Select Filters</Typography>
          <Typography sx={{fontSize:"12px"}} variant="h6">Suggested For You</Typography>

          <FormControlLabel   sx={{fontSize:"12px"}}
            control={<Checkbox   name="check1" color="primary" />}
             label="Highly Recommended by Travellers" sx={{fontSize:"12px"}}
          />
          <FormControlLabel
            control={<Checkbox name="check2" color="primary" />}
            label="Free Cancellation"
          />
          <FormControlLabel
            control={<Checkbox name="check3" color="primary" />}
            label="MMT ValueStays - Top Rated & Affordable"
          />
          <FormControlLabel
            control={<Checkbox name="check4" color="primary" />}
            label="Free Breakfast"
          />
          <FormControlLabel
            control={<Checkbox name="check5" color="primary" />}
            label="Highly-rated value for money stays"
          />
          <FormControlLabel
            control={<Checkbox name="check6" color="primary" />}
            label="Allows Unmarried Couples"
          />
          <FormControlLabel
            control={<Checkbox name="check7" color="primary" />}
            label="Entire Property"
          />
          <FormControlLabel
            control={<Checkbox name="check8" color="primary" />}
            label="Resort"
          />

          <Typography variant="h6">Price (per night)</Typography>
          <FormControlLabel
            control={<Checkbox name="check1" color="primary" />}
            label="₹ 0 - ₹ 2000
            (148)"
          />
          <FormControlLabel
            control={<Checkbox name="check2" color="primary" />}
            label="₹ 2000 - ₹ 3000
            (167)"
          />
          <FormControlLabel
            control={<Checkbox name="check3" color="primary" />}
            label="₹ 3000 - ₹ 6500
            (159)"
          />
          <FormControlLabel
            control={<Checkbox name="check4" color="primary" />}
            label="₹ 6500 - ₹ 9500
            (29)"
          />
          <FormControlLabel
            control={<Checkbox name="check5" color="primary" />}
            label="₹ 9500 - ₹ 12500
            (7)"
          />
          <FormControlLabel
            control={<Checkbox name="check6" color="primary" />}
            label="₹ 12500 - ₹ 15000
            (4)"
          />
          <FormControlLabel
            control={<Checkbox name="check7" color="primary" />}
            label="₹ 15000 - ₹ 30000
            (4"
          />
          <FormControlLabel
            control={<Checkbox name="check8" color="primary" />}
            label="₹ 30000+
            (4)"
          />

          <Typography variant="h6">Star Category</Typography>
          <FormControlLabel
            control={<Checkbox name="check1" color="primary" />}
            label="5 Star
            (25)"
          />
          <FormControlLabel
            control={<Checkbox name="check2" color="primary" />}
            label="4 Star
            (24)"
          />
          <FormControlLabel
            control={<Checkbox name="check3" color="primary" />}
            label="3 Star
            (222)"
          />

          <Typography variant="h6">User Rating</Typography>
          <FormControlLabel
            control={<Checkbox name="check1" color="primary" />}
            label="4.5 & above (Excellent)
            (12)"
          />
          <FormControlLabel
            control={<Checkbox name="check2" color="primary" />}
            label="4 & above (Very Good)
            (95)"
          />
          <FormControlLabel
            control={<Checkbox name="check3" color="primary" />}
            label="3 & above (Good)
            (338)"
          />
          <Typography variant="h6">Property Type</Typography>
          <FormControlLabel
            control={<Checkbox name="check1" color="primary" />}
            label="Hotel
            (411)"
          />
          <FormControlLabel
            control={<Checkbox name="check2" color="primary" />}
            label="Apartment
            (48)"
          />
          <FormControlLabel
            control={<Checkbox name="check3" color="primary" />}
            label="Homestay
            (17)"
          />
          <Typography variant="h6">Hotel Chains</Typography>
          <FormControlLabel
            control={<Checkbox value="Accor - Novotel & ibis" />}
            label="Accor - Novotel & ibis"
          />
          <FormControlLabel
            control={<Checkbox value="Clarks Inn" />}
            label="Clarks Inn"
          />
          <FormControlLabel
            control={<Checkbox value="Concept Hospitality" />}
            label="Concept Hospitality"
          />
          <FormControlLabel
            control={<Checkbox value="Ginger Hotels" />}
            label="Ginger Hotels"
          />
          <FormControlLabel
            control={<Checkbox value="Hilton & Doubletree" />}
            label="Hilton & Doubletree"
          />
          <FormControlLabel
            control={<Checkbox value="Hyatt" />}
            label="Hyatt"
          />
          <FormControlLabel
            control={<Checkbox value="IHG - Crowne Plaza, Holiday Inn & Intercontinental" />}
            label="IHG - Crowne Plaza, Holiday Inn & Intercontinental"
          />
          <FormControlLabel
            control={<Checkbox value="Lemon Tree" />}
            label="Lemon Tree"
          />
          <FormControlLabel
            control={<Checkbox value="Marriott, Westin & Le Meridien" />}
            label="Marriott, Westin & Le Meridien"
          />
          <FormControlLabel
            control={<Checkbox value="Orange Tiger" />}
            label="Orange Tiger"
          />
          <FormControlLabel
            control={<Checkbox value="Radisson, Park Plaza & Country Inn" />}
            label="Radisson, Park Plaza & Country Inn"
          />
          <FormControlLabel
            control={<Checkbox value="Royal Orchid" />}
            label="Royal Orchid"
          />
          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Sayaji Hotels"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="Taj"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="The Pride Hotels"
          />
          <FormControlLabel
            control={<Checkbox value="Wyndham - Ramada & Howard Johnson" />}
            label="Wyndham - Ramada & Howard Johnson"
          />
          <Typography variant="h5">Guests Love </Typography>
          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Swimming Pool

            (52)"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="
            Wi-Fi
            
            (448)"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="Spa

            (35)"
          />

          <Typography variant="h5">Booking Preference</Typography>
          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Entire Property
            (32)"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="Caretaker
            (176)"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="Instant Book
            (531"
          />
          <FormControlLabel
            control={<Checkbox value="Wyndham - Ramada & Howard Johnson" />}
            label="Homestays
            (85)"
          />
          <Typography variant="h5">House Rules</Typography>

          <FormControlLabel
            control={<Checkbox value="Sayaji Hotels" />}
            label="Pets Allowed
            (68)"
          />
          <FormControlLabel
            control={<Checkbox value="Taj" />}
            label="Bachelors Allowed
            (472)"
          />
          <FormControlLabel
            control={<Checkbox value="The Pride Hotels" />}
            label="Smoking Allowed
            (261)"
          />
          <FormControlLabel
            control={<Checkbox value="Wyndham - Ramada & Howard Johnson" />}
            label="Allows Unmarried Couples
            (412)"
          />


        </Box>
        
      </Box>
      {/* city data */}
      <Box>

        <Box>
          {value === "mumbai" ? mumbai.map((e) => (
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
            />
          )) : ""}
          {value === "pune" ? pune.map((e) => (
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
            />
          )) : ""}
          {value === "delhi" ? delhi.map((e) => (
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
            />
          )) : ""}
          {value === "nagpur" ? nagpur.map((e) => (
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
            />
          )) : ""}
        </Box>
      </Box>
    </Box>


    {/* <form onSubmit={handleSubmit} action="">
      <TextField margin="dense"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleclick}>Search</Button>
    </form> */}

    {/* <CheckboxComponent/> */}

  </>
  );
}

export default Hotel







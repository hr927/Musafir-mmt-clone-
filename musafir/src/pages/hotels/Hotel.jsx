import { Alert, AlertTitle, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Calendar from './Calender'
import hotels from "../../hotel.json"
import Citycard from "./Citycard"
// import Navbar from "./Hotelnavbar"
// import MaterialUIPickers from "./Calender"
import CheckboxComponent from "./Input"
import Modals from './Modal'
// import Calendar from 'react-calendar';
const Hotel = () => {
  const [mumbai, setMumbai] = useState(hotels.mumbai)
  const [pune, setpune] = useState(hotels.pune)
  const [delhi, setdelhi] = useState(hotels.delhi)
  const [nagpur, setnagpur] = useState(hotels.nagpur)
  const [value, setValue] = useState("mumbai");
  const [data, setdata] = useState([])
  // console.log(mumbai)
  // console.log(pune)
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
  let input = value
  let mumbaiData = Object.keys(hotels).filter(key => key === input).map(key => hotels[key]);
  let mum = mumbaiData[0]
  console.log(mumbaiData[0]);
  console.log(value)
  const style = {
    position: 'absolute',
    marginTop: '50%',
    marginLeft: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (<>

    <Box style={{ backgroundColor: "rgb(10,34,61)", width: '100%', height: "70px", position: 'sticky', top: '105px', display: "flex" }}>
      <FormControl sx={{ color: "white", fontSize: "10px" }}>
        <InputLabel style={{ color: " rgb(0, 132, 255)", fontSize: "15px", height: "30px", width: "450px", margin: "10px" }} > City,Area Or Property</InputLabel>
        <Select style={{ color: "white", fontSize: "20px", height: "20px", width: "200px", margin: "20px" }}
          labelId="demo-simple-select-label"
          value={value}
          label="Select City"
          onChange={handleChange}>
          <MenuItem value={"delhi"}>Delhi</MenuItem>
          <MenuItem value={"mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"nagpur"}>Nagpur</MenuItem>
          <MenuItem value={"pune"}>Pune</MenuItem>
        </Select>
      </FormControl>
      <Modals />
    </Box>

    <Box style={{ backgroundColor: " rgb(207,233,252)", width: '100%', height: "100px" }}></Box>
    <Box style={{ backgroundColor: " rgb(207,233,252)", width: '100%', height: "70px", position: 'sticky', top: '155px' }}>helloo</Box>
    {/* </Box> */}

    <Box>

    </Box>

    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      width: "90%",
      gap: "10px",
      margin: "auto"
    }} >

      <Box sx={{
        padding: "5px", width: "20%", display: 'flex', flexDirection: 'column', alignContent: 'flex-start',
      }} >

        <Typography sx={{ padding: "10px", fontFamily: "Lato", fontSize: "22px", fontWeight: 700, lineHeight: "22px", color: "RGB(0, 0, 0)" }} variant="h6">Select Filters</Typography>
        <Typography sx={{ padding: "10px", fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h6">Suggested For You</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Free Cancellation (156)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Breakfast Included (75)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Breakfast + Lunch/Dinner Included (13)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> All Meals Included (3)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> EMI Deals Available (8)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Pay @ Hotel Available (1)
        </label>

        <Typography sx={{ padding: "10px", fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h6">Price (per night)</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 0 - ₹ 2000 (62)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 2000 - ₹ 3500 (57)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 3500 - ₹ 7500 (42)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 7500 - ₹ 11500 (2)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 11500 - ₹ 15000 (0)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 15000 - ₹ 30000 (1)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 30000+ (0)
        </label>


        <Typography sx={{ padding: "10px", fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h6">Star Category</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />5 star (16)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />4.5 & above (Excellent)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />4 & above (Very Good)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />3 & above (Good)
          (338)
        </label>


        <Typography sx={{ padding: "10px", fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h6">Property Type</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Hotel
          (411)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Apartment
          (48)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Homestay
          (17)
        </label>


        <Typography sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h6">Hotel Chains</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Accor - Novotel & ibis
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Clarks Inn
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Concept Hospitality
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Ginger Hotels
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Hilton & Doubletree
        </label>

        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Hyatt
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Breakfast Included (75)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> IHG - Crowne Plaza, Holiday Inn & Intercontinental
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Lemon Tree
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Marriott, Westin & Le Meridien
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Orange Tiger
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Orange Tiger
        </label>

        <Typography sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h5">Guests Love </Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Swimming Pool

          (52)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />
          Wi-Fi

          (448)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Spa

          (35)"
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 11500 - ₹ 15000 (0)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 15000 - ₹ 30000 (1)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> ₹ 30000+ (0)
        </label>


        <Typography sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h5">Booking Preference</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Entire Property
          (32)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Caretaker
          (176)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Instant Book
          (531)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Homestays
          (85)
        </label>

        <Typography sx={{ fontFamily: "Lato", fontSize: "16px", fontWeight: 700, lineHeight: "16px", color: "RGB(0, 0, 0)" }} variant="h5">House Rules</Typography>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Pets Allowed
          (68)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" /> Bachelors Allowed
          (472)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Smoking Allowed
          (261)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
          <input type="checkbox" />Allows Unmarried Couples
          (412)
        </label>
        <label style={{ padding: "5px", fontFamily: 'Lato', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'rgb(74, 74, 74)' }}>
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


      <Box sx={{
        width: "90%",
      }}>
        <Typography sx={{ padding: "10px", fontFamily: "Lato", fontSize: "22px", fontWeight: 700, lineHeight: "22px", color: "RGB(0, 0, 0)" }} > {`Showing Results for ${value.toUpperCase()}`} </Typography>
        {mum.map((e) => (
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
        ))}
      </Box>
      {/* </Box> */}
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







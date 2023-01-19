
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
// import {TextField} from '@material-ui/core';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import hotels from "../hotel.json"
import Mumbai from "./Mumbai"
import Delhi from "./Delhi"
import Pune from "./Pune"
const Hotel = () => {
  const [mumbai, setMumbai] = useState(hotels.hotels.mumbai)
  const [pune, setpune] = useState(hotels.hotels.pune)
  const [delhi, setdelhi] = useState(hotels.hotels.delhi)

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

    <FormControl  >
      <InputLabel id="demo-simple-select-label">Select City</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label="Select City"
        onChange={handleChange}
      >
        <MenuItem value={"mumbai"}>Mumbai</MenuItem>
        <MenuItem value={"pune"}>Pune</MenuItem>
        <MenuItem value={"delhi"}>Delhi</MenuItem>
      </Select>
    </FormControl>
    <form onSubmit={handleSubmit} action="">
      <TextField margin="dense"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleclick}>Search</Button>
    </form>

   
    {value === "mumbai" ? mumbai.map((e) => (
      <Mumbai
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
      />
    )) : ""}
     {value === "pune" ? pune.map((e) => (
      <Mumbai
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
      />
    )) : ""}
     {value === "delhi" ? delhi.map((e) => (
      <Mumbai
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
      />
    )) : ""}
  </>
  );
}

export default Hotel







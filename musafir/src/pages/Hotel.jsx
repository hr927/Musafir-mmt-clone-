
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
// import {TextField} from '@material-ui/core';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import hotels from "../hotel.json"
import Citycard from "./Citycard"
const Hotel = () => {
  const [mumbai, setMumbai] = useState(hotels.mumbai)
  const [pune, setpune] = useState(hotels.pune)
  const [delhi, setdelhi] = useState(hotels.delhi)

  const [value, setValue] = useState("mumbai");

  const [data, setdata] = useState([])
  
const handleSubmit=()=>{

}

 const handleChange = (e) => {
    setValue(e.target.value);
  };
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
        {/* <Button onClick={handleclick}>Search</Button> */}
      </form>
   
     
  {value==="mumbai" ? mumbai.map((e) => (
          <Citycard
            key={e.id}
            price={e.grayText}
            name={e.blueText}
            image={e.img}
            imgThumb1={e.imgThumb1}
            imgThumb2={e.imgThumb2}
            imgThumb3={e.imgThumb3}
            imgThumb4={e.imgThumb4}
            rating={e.rating}
            ratingText={e.ratingText}
            location={e.pc__html}
            item={e.persuasion__item}
            cancellation={e.cancellation}
            pernight={e.font10}
            tax={e.tax}
            />
        )):""}
         {value==="delhi" ? delhi.map((e) => (
          <Citycard
            key={e.id}
            price={e.grayText}
            name={e.blueText}
            image={e.img}
            imgThumb1={e.imgThumb1}
            imgThumb2={e.imgThumb2}
            imgThumb3={e.imgThumb3}
            imgThumb4={e.imgThumb4}
            rating={e.rating}
            ratingText={e.ratingText}
            location={e.pc__html}
            item={e.persuasion__item}
            cancellation={e.cancellation}
            pernight={e.font10}
            tax={e.tax}
            />
        )):""} 
         {value==="pune" ? pune.map((e) => (
          <Citycard
            key={e.id}
            price={e.grayText}
            name={e.blueText}
            image={e.img}
            imgThumb1={e.imgThumb1}
            imgThumb2={e.imgThumb2}
            imgThumb3={e.imgThumb3}
            imgThumb4={e.imgThumb4}
            rating={e.rating}
            ratingText={e.ratingText}
            location={e.pc__html}
            item={e.persuasion__item}
            cancellation={e.cancellation}
            pernight={e.font10}
            tax={e.tax}
            />
        )):""} 
        
  </>
  );
}

export default Hotel







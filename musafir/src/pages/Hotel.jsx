
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
// import {TextField} from '@material-ui/core';
import { Box } from '@mui/system'
import React, { useState } from 'react'
import hotels from "../hotel.json"
import Mumbai from "./Mumbai"
const Hotel = () => {
  const [mumbai, setMumbai] = useState(hotels.hotels.mumbai)
  const [pune, setpune] = useState(hotels.hotels.pune)
  const [delhi, setdelhi] = useState(hotels.hotels.delhi)

  const [value, setValue] = useState("mumbai");

  const [data, setdata] = useState([])
  console.log(mumbai)
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
//  let    mdata= mumbai.map((e) => <Box key={e.id}> <h1 > {e.grayText}</h1> <h1 > {e.blueText}</h1> <img src={e.img} alt="" /> </Box>) 
// const mydata= mumbai.map((e) =>{  id=key={e.id} price={e.grayText} text={e.blueText} img={e.img} }  ) 

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
   
     {value === "mumbai" ? mumbai.map((e) => <Box key={e.id}> <h1 > {e.grayText}</h1> <h1 > {e.blueText}</h1> <img src={e.img} alt="" /> </Box>) : ""}
    {value === "pune" ? pune.map((e) => <Box key={e.id}> <h1 > {e.grayText}</h1> <h1 > {e.blueText}</h1> <img src={e.img} alt="" /> </Box>) : ""}
    {value === "delhi" ? delhi.map((e) => <Box key={e.id}> <h1 > {e.grayText}</h1> <h1 > {e.blueText}</h1> <img src={e.img} alt="" /> </Box>) : ""} */}
  {/* {value=="mumbai" ?mumbai.map((e) => (
          <Mumbai
            key={e.id}
            price={e.grayText}
            name={e.blueText}
            image={e.img}
            imgThumb1={e.imgThumb1}
            imgThumb2={e.imgThumb2}
            imgThumb3={e.imgThumb3}
            imgThumb4={e.imgThumb4}
            raing={e.rating}
            ratingText={e.ratingText}
            population={e.blueText}
            location={e.pc__html}
            persuasion__item={e.persuasion__item}
            cancellation={e.cancellation}
            pernight={e.font10}
            tax={e.tax}
            key={e.id}
            country={e.grayText}
            population={e.blueText}
            image={e.img}
          />
        )):"ok"}  */}
  </>
  );
}

export default Hotel







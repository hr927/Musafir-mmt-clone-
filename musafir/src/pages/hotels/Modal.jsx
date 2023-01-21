

import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";




import {
 
  Button,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { isBefore } from "date-fns";
import Calendar from "./Calender";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Header({Filter}) {

  
  const [open, setOpen] = React.useState(false);
  const [family, setFamily] = useState("");
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [roomPrice, setRoomPrice] = useState("");



  




  const handleRoomPrice = (event) => {
    setRoomPrice(event.target.value);
  };


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  return (
    <Box sx={{ margin: "auto",padding: "10px",color: "white" }}>
      <Box>

        <Stack direction="row" spacing={2}>
        <Calendar />
           <Box sx={{ backgroundColor: "#eaf5ff", padding: "10px", borderRadius: "5px", cursor: "pointer",}} onClick={handleOpen}>
            {family ? family : "Room and Guests"}
          </Box>

          <FormControl style={{ width: "25%" }}>

            <InputLabel id="demo-simple-select-label">
              Price per Night
            </InputLabel>

            <Select style={{ color: "white",width:"150px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={roomPrice}
              label="Price per Night"
              onChange={handleRoomPrice}>

              <MenuItem onClick={()=>Filter(0,1500)} value={"0-1500"}>0-1500</MenuItem>
              <MenuItem onClick={()=>Filter(1500,2500)} value={"1500-2500"}>1500-2500</MenuItem>
              <MenuItem onClick={()=>Filter(2500,5000)} value={"2500-5000"}>2500-5000</MenuItem>
              <MenuItem onClick={()=>Filter(5000,100000)} value={"5000+"}>5000+</MenuItem>
            </Select>

          </FormControl>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextField
                label="Rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Number of Adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Number of Children"
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                variant="outlined"
                fullWidth
                margin="normal"
              />

              <Button
                onClick={() => {
                  setFamily(
                    `${rooms} Rooms, ${adults} Adults, ${children} Children`
                  );
                  handleClose();
                }}
              >
                Done
              </Button>
            </Box>
          </Modal>

          <Button sx={{display: "flex",justifyContent: "center",margin: "auto",alignContent: "center",}} variant="contained">Search</Button>
        </Stack>

      </Box>

    </Box>
  );
}

// const cities = [
//   { label: "Mumbai" },
//   { label: "Delhi" },
//   { label: "Kolkata" },
//   { label: "Chennai" },
//   { label: "Bangalore" },
//   { label: "Hyderabad" },
//   { label: "Ahmedabad" },
//   { label: "Pune" },
//   { label: "Surat" },
//   { label: "Jaipur" },
// ];

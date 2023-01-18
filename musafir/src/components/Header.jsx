import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";

import {
  Autocomplete,
  Button,
  Checkbox,
  FormGroup,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { isBefore } from "date-fns";

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

export default function Header() {
  const [value, setValue] = React.useState(0);
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [open, setOpen] = React.useState(false);
  const [travellers, setTravellers] = useState("");
  const [family, setFamily] = useState("");
  const [classType, setClassType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [rooms, setRooms] = useState(0);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [infants, setInfants] = useState("");
  const [roomPrice, setRoomPrice] = useState("");
  const [homeStay, setHomeStay] = useState("");
  const [kitchen, setKitchen] = useState(false);
  const [pets, setPets] = useState(false);
  const [entire, setEntire] = useState(false);
  const [trainClass, setTrainClass] = useState("All Class");
  const [fair, setFair] = useState("Regular Fairs");
  const [trip, setTrip] = React.useState("Round Trip");

  if (isBefore(new Date(returnDate), new Date(departure))) {
    alert("Please choose correct date");
    setReturnDate(departure);
  }

  const handleTrip = (event) => {
    setTrip(event.target.value);
  };
  const handleRoomType = (event) => {
    setRoomType(event.target.value);
  };
  const handleFair = (event) => {
    setFair(event.target.value);
  };
  const handleRoomPrice = (event) => {
    setRoomPrice(event.target.value);
  };

  const handleTrainClass = (e) => {
    setTrainClass(e.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "70%",
        margin: "auto",
        padding: "10px",
        border: "1px solid #f2f2f2",
        borderRadius: "5px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab icon={<FlightIcon />} label={"FLights"} {...a11yProps(0)} />
          <Tab icon={<HotelIcon />} label="Hotels" {...a11yProps(1)} />
          <Tab icon={<HouseIcon />} label="Home Stays" {...a11yProps(2)} />
          <Tab
            icon={<HolidayVillageIcon />}
            label="Holiday Packages"
            {...a11yProps(3)}
          />
          <Tab icon={<TrainIcon />} label="Trains" {...a11yProps(4)} />
          <Tab icon={<DirectionsBusIcon />} label="Buses" {...a11yProps(5)} />
          <Tab icon={<LocalTaxiIcon />} label="Cabs" {...a11yProps(6)} />
          <Tab
            icon={<CurrencyExchangeIcon />}
            label="Forex"
            {...a11yProps(7)}
          />
          <Tab
            icon={<FlightTakeoffIcon />}
            label="Charter Flights"
            {...a11yProps(8)}
          />
          <Tab
            icon={<NaturePeopleIcon />}
            label="Activities"
            {...a11yProps(9)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={trip}
                row
                onChange={handleTrip}
              >
                <FormControlLabel
                  value="One Way"
                  control={<Radio />}
                  label="One Way"
                />
                <FormControlLabel
                  value="Round Trip"
                  control={<Radio />}
                  label="Round Trip"
                />
                <FormControlLabel
                  value="Multi City"
                  control={<Radio />}
                  label="Multi City"
                />
              </RadioGroup>
            </FormControl>
            <p>Book International and Deomestic Flights</p>
          </Box>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure"
                value={departure}
                disablePast="true"
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Return"
                value={returnDate}
                disablePast="true"
                onChange={(newValue) => {
                  setReturnDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <Box
              sx={{
                backgroundColor: "#eaf5ff",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              {travellers ? travellers : "Number of Travellers and Class"}
            </Box>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
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
                <TextField
                  label="Number of Infants"
                  value={infants}
                  onChange={(e) => setInfants(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Class"
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <Button
                  onClick={() => {
                    setTravellers(
                      `${adults} Adults, ${children} Children, ${infants} Infants - ${classType}`
                    );
                    handleClose();
                  }}
                >
                  Done
                </Button>
              </Box>
            </Modal>
          </Stack>
          <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <h4 style={{ display: "inline", marginRight: "12px" }}>
              Select a Fair Type:
            </h4>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={fair}
                row
                onChange={handleFair}
              >
                <FormControlLabel
                  sx={
                    fair === "Regular Fairs"
                      ? {
                          backgroundColor: "#eaf5ff",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                      : {
                          backgroundColor: "#f2f2f2",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                  }
                  value="Regular Fairs"
                  control={<Radio />}
                  label="Regular Fairs"
                />
                <FormControlLabel
                  sx={
                    fair === "Armed Forces Fairs"
                      ? {
                          backgroundColor: "#eaf5ff",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                      : {
                          backgroundColor: "#f2f2f2",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                  }
                  value="Armed Forces Fairs"
                  control={<Radio />}
                  label="Armed Forces Fairs"
                />
                <FormControlLabel
                  sx={
                    fair === "Student Fairs"
                      ? {
                          backgroundColor: "#eaf5ff",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                      : {
                          backgroundColor: "#f2f2f2",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                  }
                  value="Student Fairs"
                  control={<Radio />}
                  label="Student Fairs"
                />
                <FormControlLabel
                  sx={
                    fair === "Senior Citizen Fairs"
                      ? {
                          backgroundColor: "#eaf5ff",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                      : {
                          backgroundColor: "#f2f2f2",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                  }
                  value="Senior Citizen Fairs"
                  control={<Radio />}
                  label="Senior Citizen Fairs"
                />
                <FormControlLabel
                  sx={
                    fair === "Doctors&Nurses Fairs"
                      ? {
                          backgroundColor: "#eaf5ff",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                      : {
                          backgroundColor: "#f2f2f2",
                          padding: "2px",
                          borderRadius: "5px",
                        }
                  }
                  value="Doctors&Nurses Fairs"
                  control={<Radio />}
                  label="Doctors&Nurses Fairs"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              margin: "auto",
              width: "8%",
            }}
          >
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <p style={{ textAlign: "center", marginBottom: "5px" }}>
            Book International and Deomestic Flights
          </p>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={roomType}
                row
                onChange={handleRoomType}
              >
                <FormControlLabel
                  value="UPTO 5 ROOMS"
                  control={<Radio />}
                  label="UPTO 5 ROOMS"
                />
                <FormControlLabel
                  value="gROUP DEALS"
                  control={<Radio />}
                  label="GROUP DEALS"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="CITY,PROPERTY NAME OR LOCATION" />
              )}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check In"
                value={departure}
                disablePast="true"
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check Out"
                value={returnDate}
                disablePast="true"
                onChange={(newValue) => {
                  setReturnDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <Box
              sx={{
                backgroundColor: "#eaf5ff",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              {family ? family : "Room and Guests"}
            </Box>
            <FormControl style={{ width: "25%" }}>
              <InputLabel id="demo-simple-select-label">
                Price per Night
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={roomPrice}
                label="Price per Night"
                onChange={handleRoomPrice}
              >
                <MenuItem value={"0-1500"}>0-1500</MenuItem>
                <MenuItem value={"1500-2500"}>1500-2500</MenuItem>
                <MenuItem value={"2500-5000"}>2500-5000</MenuItem>
                <MenuItem value={"5000+"}>5000+</MenuItem>
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
          </Stack>
          <Box
            sx={{
              justifyContent: "center",
              margin: "auto",
              width: "8%",
            }}
          >
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box>
          <p style={{ textAlign: "center", marginBottom: "5px" }}>
            Book your ideal Homestay - Villas, Apartments & more.
          </p>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="CITY,PROPERTY NAME OR LOCATION" />
              )}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check In"
                value={departure}
                disablePast="true"
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Check Out"
                value={returnDate}
                disablePast="true"
                onChange={(newValue) => {
                  setReturnDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <Box
              sx={{
                backgroundColor: "#eaf5ff",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              {homeStay ? homeStay : "Add Number of Guests"}
            </Box>
            <FormControl style={{ width: "25%" }}>
              <InputLabel id="demo-simple-select-label">
                TRAVELLING FOR
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={roomPrice}
                label="Select a Reason Optional"
                onChange={handleRoomPrice}
              >
                <MenuItem value={"Work"}>Work</MenuItem>
                <MenuItem value={"Leisure"}>Leisure</MenuItem>
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
                    setHomeStay(` ${adults} Adults, ${children} Children`);
                    handleClose();
                  }}
                >
                  Done
                </Button>
              </Box>
            </Modal>
          </Stack>
          <Box sx={{ display: "flex", alignItems: "center", padding: "10px" }}>
            <h4 style={{ display: "inline", marginRight: "12px" }}>Filters:</h4>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox onChange={() => setKitchen(!kitchen)} />}
                label="Kitchen"
                sx={
                  kitchen
                    ? {
                        backgroundColor: "#eaf5ff",
                        padding: "2px",
                        borderRadius: "5px",
                      }
                    : {
                        backgroundColor: "#f2f2f2",
                        padding: "2px",
                        borderRadius: "5px",
                      }
                }
              />
              <FormControlLabel
                control={<Checkbox onChange={() => setPets(!pets)} />}
                label="Pets Allowed"
                sx={
                  pets
                    ? {
                        backgroundColor: "#eaf5ff",
                        padding: "2px",
                        borderRadius: "5px",
                      }
                    : {
                        backgroundColor: "#f2f2f2",
                        padding: "2px",
                        borderRadius: "5px",
                      }
                }
              />
              <FormControlLabel
                control={<Checkbox onChange={() => setEntire(!entire)} />}
                label="Entire Properties"
                sx={
                  entire
                    ? {
                        backgroundColor: "#eaf5ff",
                        padding: "2px",
                        borderRadius: "5px",
                      }
                    : {
                        backgroundColor: "#f2f2f2",
                        padding: "2px",
                        borderRadius: "5px",
                      }
                }
              />
            </FormGroup>
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              margin: "auto",
              width: "8%",
            }}
          >
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure"
                value={departure}
                disablePast="true"
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
            <Box
              sx={{
                backgroundColor: "#eaf5ff",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={handleOpen}
            >
              {family ? family : "Room and Guests"}
            </Box>

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
          </Stack>

          <Box
            sx={{
              justifyContent: "center",
              margin: "auto",
              width: "8%",
            }}
          >
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box>
          <p
            style={{
              textAlign: "center",
              marginBottom: "-15px",
              fontWeight: "bold",
            }}
          >
            IRCTC Train Ticket Booking
          </p>
          <p style={{ textAlign: "center", marginBottom: "10px" }}>
            IRCTC Authorized e-ticketing
          </p>
          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure"
                value={departure}
                disablePast="true"
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>

            <FormControl style={{ width: "25%" }}>
              <InputLabel id="demo-simple-select-label">CLASS</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={trainClass}
                label="Price per Night"
                onChange={handleTrainClass}
              >
                <MenuItem value={"All Class"}>All Class</MenuItem>
                <MenuItem value={"Sleeper Class"}>Sleeper Class</MenuItem>
                <MenuItem value={"Third AC"}>Third AC</MenuItem>
                <MenuItem value={"Second AC"}>Second AC</MenuItem>
                <MenuItem value={"First AC"}>First AC</MenuItem>
                <MenuItem value={"Second Seating"}>Second Seating</MenuItem>
                <MenuItem value={"AC Chair Car"}>AC Chair Car</MenuItem>
                <MenuItem value={"First Class"}>First Class</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box
            sx={{
              justifyContent: "center",
              margin: "auto",
              width: "8%",
            }}
          >
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box>
          <p
            style={{
              textAlign: "center",

              fontWeight: "bold",
            }}
          >
            Bus Ticket Booking
          </p>

          <Stack direction="row" spacing={2}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 500 }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={cities}
              sx={{ width: 500 }}
              renderInput={(params) => <TextField {...params} label="To" />}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Departure"
                value={departure}
                disablePast="true"
                onChange={(newValue) => {
                  setDeparture(newValue);
                }}
                renderInput={(params) => (
                  <TextField {...params} error={false} />
                )}
              />
            </LocalizationProvider>
          </Stack>
          <Box
            sx={{
              justifyContent: "center",
              margin: "auto",
              width: "8%",
            }}
          >
            <Button variant="contained">Search</Button>
          </Box>
        </Box>
      </TabPanel>
    </Box>
  );
}

const cities = [
  { label: "Mumbai" },
  { label: "Delhi" },
  { label: "Kolkata" },
  { label: "Chennai" },
  { label: "Bangalore" },
  { label: "Hyderabad" },
  { label: "Ahmedabad" },
  { label: "Pune" },
  { label: "Surat" },
  { label: "Jaipur" },
];

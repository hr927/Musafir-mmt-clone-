import React, { useState, useEffect } from "react";
import styles from "./SearchBox.module.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FareTypes from "./FareTypes";
import { useNavigate } from "react-router-dom";
import { border } from "@mui/system";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchBox = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [newData, setNewData] = useState([]);
  const [departure, setDeparture] = React.useState(null);
  const [retrn, setRetrn] = React.useState(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState(1);

  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  const [openTravellers, setOpenTravellers] = useState(false);
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);
  const navigate = useNavigate();
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };

  const handleSearch = async () => {
    return await axios
      .get(`https://musafir-backend.onrender.com/flights?q=${from}`)
      .then((response) => handleNewSearch(response.data))
      .catch((err) => console.log(err));
  };

  const handleNewSearch = (a) => {
    let c = a.filter((e) => {
      return e.from === from && e.to === to;
    });

    setNewData(c);
    // localStorage.setItem("dataKey", JSON.stringify(c));
    console.log(c);
  };

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  const handleSubmit = () => {
    navigate("/flights");
  };

  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  let dataLS = JSON.parse(localStorage.getItem("dataKey"));
  console.log("dataLS", dataLS);

  // setNewData(dataLS);

  useEffect(() => {
    loadFlightData();
  }, []);

  const loadFlightData = async () => {
    return await axios
      .get("https://musafir-backend.onrender.com/flights")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  console.log("data", data);

  const handleSortLH = async (e) => {
    return await axios
      .get(
        `https://musafir-backend.onrender.com/flights?q=${from}&_sort=price&_order=asc`
      )
      .then((response) => handleSortLHE(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortLHE = (a) => {
    let d = a.filter((e) => {
      return e.from === from && e.to === to;
    });

    setNewData(d);
    console.log("d", d);
  };

  const handleSortHL = async (e) => {
    return await axios
      .get(
        `https://musafir-backend.onrender.com/flights?q=${from}&_sort=price&_order=desc`
      )
      .then((response) => handleSortHLE(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortHLE = (a) => {
    let f = a.filter((e) => {
      return e.from === from && e.to === to;
    });

    setNewData(f);
    console.log("f", f);
  };
  return (
    <>
      <div className={styles.flight_wrapper}>
        <div className={styles.flight_container}>
          <div className={styles.tripInternational}>
            <div className={styles.multiple_trip}>
              <div>
                <input checked={true} type="radio" name="trip" />
                <div>ONEWAY</div>
              </div>
              <div>
                <input type="radio" name="trip" />
                <div>ROUND TRIP</div>
              </div>
              <div>
                <input type="radio" name="trip" />
                <div>MULTICITY</div>
              </div>
            </div>
            <div className={styles.book}>
              Book International and Domestic Flights
            </div>
          </div>

          {/* location of from and to  including date and passenger starts  */}
          <div className={styles.bookingSearch}>
            <div className={styles.fromToConnecting}>
              <div className={styles.fromTo}>
                <div className={styles.from}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel
                      sx={{ width: "100%" }}
                      id="demo-simple-select-label"
                    >
                      From
                    </InputLabel>
                    <Select
                      fullWidth
                      sx={{ width: "100%" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={from}
                      label="from"
                      onChange={(e) => setFrom(e.target.value)}
                    >
                      <MenuItem value={"DELHI"}>New Delhi</MenuItem>
                      <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                      <MenuItem value={"PUNE"}>Pune</MenuItem>
                      <MenuItem value={"BANGLURU"}>Bengaluru</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.connectingIcon}>
                  <ConnectingAirportsIcon fontSize="large" color="grey" />
                </div>
                <div className={styles.to}>
                  <FormControl sx={{ width: "100%" }}>
                    <InputLabel
                      fullWidth
                      sx={{ width: "100%" }}
                      id="demo-simple-select-label"
                    >
                      To
                    </InputLabel>
                    <Select
                      sx={{ width: "100%" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={to}
                      label="to"
                      onChange={(e) => setTo(e.target.value)}
                    >
                      <MenuItem value={"BANGLURU"}>Bengaluru</MenuItem>
                      <MenuItem value={"MUMBAI"}>Mumbai</MenuItem>
                      <MenuItem value={"PUNE"}>Pune</MenuItem>
                      <MenuItem value={"DELHI"}>New Delhi</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            {/* departure and return date start */}
            <div className={styles.DepRetContainer}>
              {/* departure date starts */}
              <div style={{ width: "100%" }}>
                <FormControl sx={{ width: "100%" }}>
                  <LocalizationProvider
                    sx={{ width: "100%" }}
                    dateAdapter={AdapterDateFns}
                  >
                    <DatePicker
                      label="Departure"
                      value={departure}
                      onChange={(newValue) => {
                        setDeparture(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
              {/* departure date end */}
            </div>
            {/* departure and return date end */}

            {/* number of travellers start */}
            <div className={styles.travellerContainer}>
              <div onClick={onClickModal}>
                <div className={styles.travellersText}>TRAVELLERS</div>
                <div
                  className={styles.noOfTraveller}
                  style={{ marginTop: "-6px" }}
                >
                  <span>{travellers}</span>
                  {travellers > 1 ? "Travellers" : ""}
                </div>
              </div>

              <div
                className={
                  openTravellers ? styles.traveller_modal : styles.noDisplay
                }
              >
                <div className={styles.adultChild}>ADULTS (12y +)</div>
                <div className={styles.passengerButtonContainer}>
                  {arr.map((val) => (
                    <div
                      key={val}
                      className={`${
                        selectedButtonColor === val
                          ? styles.clickPassenger
                          : styles.passengerButton
                      }`}
                      onClick={() => {
                        setTogglePassengerColor(!togglePassengerColor);
                        onClickNoOfPass(val);
                        setSelectedButtonColor(val);
                      }}
                    >
                      {val}
                    </div>
                  ))}
                </div>

                {/* for children and inf */}
                <div className={styles.infantChildren}>
                  <div>
                    <div className={styles.adultChild}>
                      CHILDREN (2y - 12y )
                    </div>
                    <div className={styles.passengerButtonContainer}>
                      {ar1.map((val) => (
                        <div
                          key={val}
                          className={
                            val === 0
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                          }}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className={styles.adultChild}>INFANTS (below 2y)</div>
                    <div className={styles.passengerButtonContainer}>
                      {ar1.map((val) => (
                        <div
                          key={val}
                          className={
                            val === 0
                              ? styles.clickPassenger
                              : styles.passengerButton
                          }
                          onClick={() => {
                            setTogglePassengerColor(!togglePassengerColor);
                            onClickNoOfPass(val);
                          }}
                        >
                          {val}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* for children and inf */}

                <div className={styles.modalApplyText} onClick={onClickModal}>
                  <div>Apply</div>
                </div>
              </div>
            </div>
          </div>
          {/* location of departure and arrival  including date and passenger end  */}

          <FareTypes />
        </div>
        <div className={styles.buttonContainer}>
          <div type="submit" onClick={handleSearch}>
            SEARCH
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* <form className="form" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="City Nmae"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="City Nmae"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />

        <button type="submit">Search</button>
      </form> */}

        <div className={styles.left}>
          <div className={styles.filters}>
            <div className={styles.firstFilter}>
              <h3>Sort by price</h3>
              <div className={styles.divi}>
                <input type="checkbox" onChange={handleSortLH} />
                <p>Low to High</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" onChange={handleSortHL} />
                <p>High to Low</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Popular Filters</h3>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>stop</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Late Departures</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Refundable Fares</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Alliances & Airlines</h3>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Air India</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>IngiGO</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>SpiceJet</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>GoAir</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>Vistara</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Layover Airports</h3>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>IGI</p>
              </div>
              <div className={styles.divi}>
                <input type="checkbox" />
                <p>CSMI</p>
              </div>
            </div>
            <div className={styles.firstFilter}>
              <h3>Select Range ₹</h3>
              <input type="range" min="1000" max="10000" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {newData.map((e, index) => (
            <div key={index} className={styles.flightCard}>
              <div className={styles.flightName}>
                <div className={styles.logo}>
                  <img
                    src={
                      e.airline === "IndiGo"
                        ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                        : e.airline === "AirIndia"
                        ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                        : e.airline === "Vistara"
                        ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                        : e.airline === "SpiceJet"
                        ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                        : e.airline === "GoAir"
                        ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                        : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                    }
                    alt=""
                  />
                </div>
                <div>
                  <div>{e.airline}</div>
                  <div>{e.number}</div>
                </div>
              </div>
              <div className={styles.flighttime}>
                <div>{e.departure}</div>
                <br />
                <div>{e.from}</div>
              </div>
              <div className={styles.totalTime}>
                <div>{e.totalTime}</div>
                <hr />
                <div>non-stop</div>
              </div>
              <div className={styles.flighttime}>
                <div>{e.arrival}</div>
                <br />
                <div>{e.to}</div>
              </div>
              <div className={styles.price}>Rs.{e.price}</div>
              <button
                class={styles.bookNow}
                onClick={() => {
                  localStorage.setItem("bookData", JSON.stringify(e));
                }}
              >
                <Link to="/booking">BOOK NOW</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBox;

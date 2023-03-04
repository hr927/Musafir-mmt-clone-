import { Box } from "@mui/system";
import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WalletIcon from "@mui/icons-material/Wallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Typography,
  Modal,
  Tab,
  Tabs,
  Grid,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const Singlehotel = () => {
  const hoteldata = JSON.parse(localStorage.getItem("hoteldetails")) || [];
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const [amount, setAmount] = useState(1000);
  const [sendVia, setSendVia] = useState("whatsapp");
  const [total, setTotal] = useState(amount);
  const [card, setCard] = useState({});
  const [open, setOpen] = React.useState(false);
  const [upi, setUPI] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  const handlePayment = () => {
    if (!cardNumber || !nameOnCard || !expiryMonth || !expiryYear || !cvv) {
      alert("Please fill in all fields");
    } else if (cardNumber.length < 9 || cardNumber.length > 19) {
      alert("Card number should be between 9 to 19 digits");
    } else if (expiryMonth < 1 || expiryMonth > 12) {
      alert("Invalid expiry month");
    } else if (expiryYear < new Date().getFullYear()) {
      alert("Invalid expiry year");
    } else if (cvv.length !== 3) {
      alert("CVV should be 3 digits long");
    } else {
      setOtp(prompt("Enter OTP"));
      if (otp === 1234) {
        alert("Gift Card Added");
        navigate("/");
      } else {
        alert("Please Try again");
      }
    }
  };

  const handleSubmit = () => {
    if (!upi) {
      alert("Please enter UPI ID");
    } else if (!otp) {
      alert("Please enter OTP");
    } else {
      if (otp === "1234") {
        alert("Gift Card Added");
        navigate("/");
      } else {
        alert("Please Try again");
      }
    }
  };
  const handleIdChange = (event) => {
    setUPI(event.target.value);
    setShowOtpField(event.target.value !== "");
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Box
        style={{
          backgroundColor: " rgb(207,233,252)",
          width: "100%",
          height: "30px",
          position: "sticky",
          top: "100px",
        }}
      >
        <Typography
          style={{
            padding: "10px",
            fontFamily: "Lato",
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "12px",
            color: "rgb(0, 140, 255)",
          }}
          width={"90%"}
          fontSize={"20px"}
          margin={"auto"}
        >
          {" "}
          Hotel in
          <span
            style={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "12px",
              color: "rgb(0, 140, 255)",
            }}
          >
            {hoteldata.name}
          </span>{" "}
          -{" "}
          <span
            style={{
              fontFamily: "Lato",
              fontSize: "12px",
              fontWeight: "700",
              lineHeight: "12px",
              color: "rgb(0, 140, 255)",
            }}
          >
            {hoteldata.location2}
          </span>
          <span> {hoteldata.location}</span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],

          width: "90%",
          margin: "auto",
          paddingTop: "100px",
          gap: "50px",
        }}
      >
        <Box sx={{ marginTop: "", width: ["100%", "60%"] }}>
          <div style={{ display: "flex" }}>
            <div>
              <div>
                <img
                  style={{ borderRadius: "10px", padding: "5px" }}
                  width={"100%"}
                  height={"400px"}
                  src={hoteldata.image}
                  alt=""
                />
              </div>
            </div>

            <div>
              <div>
                <img
                  style={{ borderRadius: "10px", padding: "5px" }}
                  width={"100%"}
                  height={"195px"}
                  src={hoteldata.imgThumb1}
                  alt=""
                />
              </div>
              <div>
                <img
                  style={{ borderRadius: "10px", padding: "5px" }}
                  width={"100%"}
                  height={"195px"}
                  src={hoteldata.imgThumb2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            marginTop: "",
            width: "auto",
            display: "flex",
            flexDirection: ["column", "row", "column"],
          }}
        >
          <Box style={{ borderRadius: "10px", border: "1px solid grey" }}>
            <Box
              style={{
                fontFamily: "Lato",
                fontSize: "26px",
                fontWeight: 900,
                lineHeight: "25px",
                color: "rgb(0, 0, 0)",
                padding: "10px",
                margin: "auto",
                marginTop: "5px",
              }}
            >
              {" "}
              {hoteldata.name}
            </Box>

            <Box
              style={{
                display: "flex",
                gap: "50px",
                padding: "5px",
                marginTop: "5px",
              }}
            >
              <Box>
                <Typography style={{ fontSize: "17px" }}>
                  For 2 Adults
                </Typography>
                <Typography
                  style={{ color: "rgb(26, 121, 113)", fontSize: "15px" }}
                >
                  {hoteldata.cancellation}
                </Typography>
                <Typography
                  style={{ color: "rgb(26, 121, 113)", fontSize: "15px" }}
                >
                  Room With Free Cancellation
                </Typography>
              </Box>
              <Box>
                <Typography style={{ fontSize: "10px", color: "blue" }}>
                  {hoteldata.pernight}
                </Typography>
                <Typography
                  style={{
                    textDecoration: "line-through",
                    color: " rgb(155, 155, 155)",
                  }}
                >
                  ₹{hoteldata.dscprice}
                </Typography>
                <Typography
                  style={{
                    font: "20px",
                    fontWeight: "700",
                    lineHeight: "20px",
                  }}
                >
                  ₹{hoteldata.price}
                </Typography>

                <Typography style={{ color: " rgb(155, 155, 155)" }}>
                  {hoteldata.tax}
                </Typography>
                <Typography style={{ fontSize: "10px", color: "red" }}>
                  Saving ₹{200}
                </Typography>
              </Box>
            </Box>

            <Box
              style={{
                display: "flex",
                gap: "50px",
                padding: "5px",
                marginTop: "5px",
                justifyContent: "space-around",
                borderTop: "1px solid grey",
              }}
            >
              <Button style={{ color: "rgb(34,122,247)" }}>
                View Other Rooms
              </Button>
              <Button
                onClick={() => {
                  handleOpen();
                }}
                style={{ backgroundColor: "rgb(34,122,247)", color: "white" }}
              >
                Book Now
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      bgcolor: "white",
                      display: "flex",
                    }}
                  >
                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={value}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      sx={{ borderRight: 1, borderColor: "divider" }}
                    >
                      <Tab
                        label={
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              margin: "auto",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <WalletIcon />
                            UPI
                          </div>
                        }
                        {...a11yProps(0)}
                      />
                      <Tab
                        label={
                          <div
                            style={{
                              display: "flex",
                              width: "100%",
                              margin: "auto",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <CreditCardIcon />
                            CREDIT/DEBIT
                          </div>
                        }
                        {...a11yProps(1)}
                      />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "10px",
                          gap: "10px",
                        }}
                      >
                        <TextField
                          label="UPI ID"
                          value={upi}
                          onChange={handleIdChange}
                        />
                        {showOtpField && (
                          <TextField
                            label="OTP"
                            value={otp}
                            onChange={(event) => setOtp(event.target.value)}
                            type="password"
                          />
                        )}
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleSubmit}
                        >
                          Pay
                        </Button>
                      </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "auto",
                          rowGap: "10px",
                          alignContent: "center",
                        }}
                      >
                        <TextField
                          label="Card Number"
                          sx={{ width: "50%" }}
                          value={cardNumber}
                          onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <TextField
                          label="Name on Card"
                          value={nameOnCard}
                          sx={{ width: "50%" }}
                          onChange={(e) => setNameOnCard(e.target.value)}
                        />
                        <div style={{ display: "flex", gap: "20px" }}>
                          <div
                            style={{
                              display: "flex",
                              width: "40%",
                              //   margin: "auto",
                              gap: "10px",
                            }}
                          >
                            <TextField
                              label="Exp Month"
                              value={expiryMonth}
                              onChange={(e) => setExpiryMonth(e.target.value)}
                            />
                            <TextField
                              label="Exp Year"
                              value={expiryYear}
                              onChange={(e) => setExpiryYear(e.target.value)}
                            />
                          </div>
                          <TextField
                            label="CVV"
                            value={cvv}
                            sx={{ width: "20%" }}
                            onChange={(e) => setCvv(e.target.value)}
                            type="password"
                          />
                        </div>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handlePayment}
                        >
                          Pay Now
                        </Button>
                      </div>
                    </TabPanel>
                  </Box>
                </Box>
              </Modal>
            </Box>
          </Box>

          <Box
            style={{
              display: "flex",
              padding: "5px",
              marginTop: "5px",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <Box
              style={{
                border: "1px solid grey",
                padding: "5px",
                marginTop: "5px",
                width: "50%",
                borderRadius: "10px",
              }}
            >
              <Typography
                style={{
                  width: "30px",
                  padding: "20px",
                  backgroundColor: "rgb(11,88,180)",
                  fontFamily: "Lato",
                  fontSize: "28px",
                  fontWeight: 900,
                  lineHeight: "28px",
                  color: "rgb(255, 255, 255)",
                  borderRadius: "10px",
                }}
              >
                {hoteldata.rating}
              </Typography>
              <Typography
                style={{
                  padding: "3px",
                  fontFamily: "lato",
                  fontSize: "20px",
                  fontWeight: "900",
                  lineHeight: "16px",
                  color: "rgb(11, 88, 180)",
                }}
              >
                {hoteldata.ratingText}
              </Typography>
              <Typography
                style={{
                  padding: "3px",
                  fontFamily: "Lato",
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "15px",
                  color: "rgb(74, 74, 74)",
                }}
              >
                Based on {hoteldata.ratingcount} Rating
              </Typography>
              <Typography
                style={{
                  padding: "3px",
                  fontFamily: "Lato",
                  fontSize: "22px",
                  fontWeight: "700",
                  lineHeight: "25px",
                  color: " rgb(0, 140, 255)",
                }}
              >
                {" "}
                Read All Reviews
              </Typography>
            </Box>

            <Box
              style={{ marginTop: "5px", width: "50%", borderRadius: "10px" }}
            >
              <img
                style={{ borderRadius: "10px", height: "150px" }}
                width={"230px"}
                src={hoteldata.image}
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          gap: "50px",
        }}
      >
        <Box style={{ width: "60%" }}>
          <Box
            style={{
              fontFamily: "Lato",
              fontSize: "26px",
              fontWeight: 900,
              lineHeight: "26px",
              padding: "5px",
              color: "rgb(11,88,180)",
            }}
          >
            {" "}
            {hoteldata.mmt}
          </Box>
          <Box
            style={{
              fontFamily: "Lato",
              fontSize: "26px",
              fontWeight: 900,
              lineHeight: "26px",
              padding: "5px",
            }}
          >
            {" "}
            {hoteldata.location2}
          </Box>

          <Box
            style={{
              display: "flex",
              gap: "10px",
              padding: "5px",
              marginTop: "5px",
            }}
          >
            <Typography
              style={{
                fontFamily: "lato",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "normal",
                color: "rgb(74, 74, 74)",
              }}
            >
              {hoteldata.location2}
            </Typography>
            <Typography
              style={{
                fontFamily: "lato",
                fontSize: "14px",
                fontWeight: "700",
                lineHeight: "normal",
                color: "rgb(74, 74, 74)",
              }}
            >
              {hoteldata.location}
            </Typography>
          </Box>
        </Box>

        <Box style={{ width: "35%", padding: "10px" }}>
          <Box
            style={{
              borderRadius: "5px",
              border: "1px solid grey",
              backgroundColor: "rgb(205,252,232)",
              textAlign: "center",
              padding: "10px",
            }}
          >
            <Typography
              style={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "900",
                lineHeight: "14px",
              }}
            >
              Want to book now & pay later?
            </Typography>
            <Typography
              style={{
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: "900",
                lineHeight: "14px",
              }}
            >
              LOGIN to Book now @ just ₹1 !
            </Typography>
          </Box>

          <Box
            style={{
              borderRadius: "10px",
              border: "1px solid grey",
              marginTop: "10px",
            }}
          >
            <Box
              style={{ display: "flex", borderRadius: "10px", margin: "10px" }}
            >
              <Box
                style={{
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "red",
                  fontSize: "20px",
                  padding: "10px",
                }}
              >
                ₹
              </Box>

              <Box style={{ padding: "10px" }}>
                <Typography
                  style={{
                    fontFamily: "lato",
                    fontSize: "18px",
                    fontWeight: "900",
                    lineHeight: "18px",
                    color: "rgb(11,88,180)",
                    padding: "10px",
                  }}
                >
                  ₹{hoteldata.mmt}
                </Typography>
                <Typography
                  style={{
                    font: "14px",
                    fontWeight: "400",
                    lineHeight: "normal",
                    color: "grey",
                  }}
                >
                  ₹{hoteldata.toprated}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Typography
                style={{
                  padding: "10px",
                  fontFamily: "lato",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  color: "rgb(74, 74, 74)",
                }}
              >
                ^{hoteldata.text}
              </Typography>
              <Typography
                style={{
                  padding: "10px",
                  fontFamily: "lato",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  color: "rgb(74, 74, 74)",
                }}
              >
                ^{hoteldata.bold}
              </Typography>
              <Typography
                style={{
                  padding: "10px",
                  fontFamily: "lato",
                  fontSize: "10px",
                  fontWeight: "400",
                  lineHeight: "14px",
                  color: "teal",
                }}
              >
                {hoteldata.dummy}
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: ["none", "none", "flex"],
          justifyContent: "space-around",
          width: "80%",
          margin: "auto",
        }}
      >
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          ROOMS
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          OVERVIEWS
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          LOCATION
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          AMENITIES
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          PROPERTY RULES
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          USER REVIEWS
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        >
          SIMILAR PRPERTIES
        </Typography>
        <Typography
          style={{
            textDecoration: "underline",
            padding: "5px",
            fontFamily: "Lato",
            fontSize: "17px",
            fontWeight: 800,
            lineHeight: "normal",
            color: "rgb(74, 74, 74)",
          }}
        ></Typography>
      </Box>
      <hr />

      <Box style={{ width: "90%", margin: "auto" }}>
        <Typography
          style={{
            fontFamily: "Lato",
            fontSize: "20px",
            fontWeight: "900",
            lineHeight: "20px",
            padding: "5px",
          }}
        >
          {" "}
          About The Hotel
        </Typography>
        <Typography
          style={{
            fontFamily: "Lato",
            fontSize: "15px",
            fontWeight: "1400",
            lineHeight: "15px",
            padding: "5px",
          }}
        >
          {" "}
          CHECK IN 12 PM CHECK OUT 12 PM
        </Typography>
        <Typography
          style={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "23px",
            padding: "5px",
          }}
          variant="h6"
        >
          {" "}
          Hotel Orient Inn is located in {hoteldata.name}. It is at a distance
          of {hoteldata.location} and 4.5 km from Bus Stand Ramna Maroti.
          Popular places to visit in {hoteldata.location2} are Deekshabhoomi (5
          km), Ramdham (6 km), Ambazari Lake (7 km), Maharajbagh Zoo (2 km),
          Sitabuldi Fort (2 km), Raman Science Centre (3 km), Jama Masjid (3
          km), Masjid Garib Navaz (3 km) and many more. Famous restaurant in
          Bangalore are Yoko Sizzlers, The Zuree Urban Kitchen, TCK Restaurant,
          Mocha, Hibiscus, Fountain Sizzlers & Bistro, Reds, Fionaa Lounge and
          Restaurant and many more where one enjoy mouthwatering delicious
          chinese, indian, thai, mexican and continental dishes. The Rooms have
          impressive views and eve..
        </Typography>
      </Box>

      <Box style={{ width: "90%", margin: "auto", marginTop: "70px" }}>
        <Typography
          style={{
            fontFamily: "Lato",
            fontSize: "20px",
            fontWeight: "900",
            lineHeight: "20px",
            padding: "5px",
          }}
        >
          Select Rooms
        </Typography>

        <label
          style={{
            fontFamily: "Lato",
            fontSize: "20px",
            fontWeight: "900",
            lineHeight: "20px",
            padding: "5px",
          }}
          htmlFor="input"
        >
          {" "}
          <input fontSize="12px" type="checkbox" />
          Free Cancel lation
        </label>

        <Grid
          container
          spacing={2}
          columns={{ xs: 4, sm: 8, md: 18 }}
          sx={{
            width: "90%",
            margin: "auto",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          <Grid item xs={4} sm={3} md={5}>
            {" "}
            <Box
              style={{
                border: "1px solid grey",
                width: "100%",
                borderRadius: "10px",
                padding: "5px",
                margin: "10px",
              }}
            >
              <img
                style={{ borderRadius: "10px", padding: "5px" }}
                width={"100%"}
                height={"195px"}
                src={hoteldata.image}
                alt=""
              />
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontSize: "22px",
                  fontWeight: 900,
                  lineHeight: "normal",
                  padding: "10px",
                }}
              >
                {" "}
                {hoteldata.name}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "rgb(74, 74, 74)",
                  padding: "10px",
                }}
              >
                375 sq.ft
              </Typography>
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "rgb(74, 74, 74)",
                  padding: "10px",
                }}
              >
                {" "}
                City View
              </Typography>
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "rgb(74, 74, 74)",
                  padding: "10px",
                }}
              >
                {" "}
                King Bed
              </Typography>
              <Typography
                style={{
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "rgb(74, 74, 74)",
                  padding: "10px",
                }}
              >
                {" "}
                • Work Desk
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sm={3} md={5}>
            <Box
              style={{
                border: "1px solid grey",
                width: "100%",
                borderRadius: "10px",
                padding: "5px",
                margin: "10px",
              }}
            >
              <img
                style={{ borderRadius: "10px", padding: "5px" }}
                width={"100%"}
                height={"195px"}
                src={hoteldata.imgThumb1}
                alt=""
              />

              <Typography
                style={{
                  padding: "5px",
                  fontFamily: "lato",
                  fontSize: "16px",
                  fontWeight: 900,
                  lineHeight: "20px",
                  color: "RGB(74, 74, 74)",
                }}
              >
                Room With Free Cancellation
              </Typography>
              <Typography
                style={{
                  padding: "5px",
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "rgb(26, 121, 113)",
                }}
              >
                {hoteldata.cancellation}
              </Typography>
              <Typography
                style={{
                  padding: "5px",
                  fontFamily: "Lato",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  color: "rgb(26, 121, 113)",
                }}
              >
                {hoteldata.moneyback}
              </Typography>
              <Button
                style={{ backgroundColor: "rgb(11,88,180)", color: "white" }}
              >
                Login In Now To Book
              </Button>
            </Box>
          </Grid>

          <Grid item xs={4} sm={3} md={5}>
            <Box
              style={{
                border: "1px solid grey",
                width: "100%",
                borderRadius: "10px",
                padding: "5px",
                margin: "10px",
              }}
            >
              <Typography
                style={{
                  backgroundColor: "rgb(205,252,232)",
                  fontSize: "16px",
                  color: "grey",
                  padding: "10px",
                }}
              >
                {hoteldata.offer}
              </Typography>
              <Typography
                style={{ color: "grey", fontSize: "16px", padding: "5px" }}
              >
                {hoteldata.pernight}
              </Typography>
              <Typography
                style={{
                  textDecoration: "line-through",
                  color: " rgb(155, 155, 155)",
                  padding: "5px",
                }}
              >
                ₹{hoteldata.dscprice}
              </Typography>
              <Typography
                style={{
                  font: "26px",
                  fontWeight: "700",
                  lineHeight: "20px",
                  padding: "5px",
                }}
              >
                ₹{hoteldata.price}
              </Typography>
              <Typography
                style={{
                  font: "20px",
                  color: " rgb(155, 155, 155)",
                  padding: "5px",
                }}
              >
                {hoteldata.tax}
              </Typography>
              <Button
                style={{
                  backgroundColor: "rgb(11,88,180)",
                  color: "white",
                  fontFamily: "Lato",
                  fontSize: "16px",
                  fontWeight: 900,
                  lineHeight: "normal",
                  color: "RGB(255, 255, 255)",
                  padding: "5px",
                }}
              >
                {" "}
                Book Now
              </Button>

              <Typography style={{ fontSize: "20px", color: "grey" }}>
                Saving ₹{200}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ width: "90%", margin: "auto" }}>
        <Typography
          style={{
            fontFamily: "lato",
            fontSize: "26px",
            fontWeight: 900,
            lineHeight: "normal",
            padding: "10px",
          }}
        >
          Location{" "}
        </Typography>
        <Typography
          style={{
            fontFamily: "Lato",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "18px",
            padding: "20px",
          }}
        >
          The Location of {hoteldata.name} has been rated 3.9 by{" "}
          {hoteldata.ratingcount} guests{" "}
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            style={{
              textDecoration: "underline",
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "rgb(74, 74, 74)",
            }}
          >
            {hoteldata.clean}
          </Typography>
          <Typography
            style={{
              textDecoration: "underline",
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "rgb(74, 74, 74)",
            }}
          >
            {hoteldata.hospitalit}
          </Typography>
          <Typography
            style={{
              textDecoration: "underline",
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "rgb(74, 74, 74)",
            }}
          >
            Elevator/Lift
          </Typography>
          <Typography
            style={{
              textDecoration: "underline",
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "rgb(74, 74, 74)",
            }}
          >
            Air Conditioning
          </Typography>
          <Typography
            style={{
              textDecoration: "underline",
              padding: "10px",
              fontFamily: "Lato",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "16px",
              color: "rgb(74, 74, 74)",
            }}
          >
            Room Service
          </Typography>
        </Box>
      </Box>
      <hr />
      <Box>
        <Box
          style={{
            display: "flex",
            width: "90%",
            margin: "auto",
            justifyContent: "space-around",
          }}
        >
          {" "}
          <Box>
            <h4>Basic Facilities</h4>
            <ul>
              <li>Free Parking</li>
              <li>Elevator/Lift</li>
              <li>Air Conditioning</li>
              <li>Room Service</li>
            </ul>{" "}
          </Box>
          <Box>
            <h4>Safety and Security</h4>
            <ul>
              <li>-Safe</li>
              <li>- CCTV</li>
              <li>- Security</li>
            </ul>{" "}
          </Box>
          <Box>
            {" "}
            <h4>Health and wellness</h4>
            <ul>
              <li>- First-aid Services</li>
            </ul>
          </Box>
          <Box>
            {" "}
            <h4>Media and technology</h4>
            <ul>
              <li> Electrical Adapters</li>
              <li>Elevator/Lift</li>
              <li>- Electrical Chargers</li>
              <li>- TV</li>
            </ul>
          </Box>
        </Box>

        <Box>
          {" "}
          <Typography style={{ width: "90%", margin: "auto" }}>
            Property Rules
          </Typography>
          <Box
            style={{
              display: "flex",
              width: "90%",
              margin: "auto",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <h6>Guests with fever are not allowed</h6>
              <h6>Guests from containment zones are not allowed</h6>
              <h6>
                Guests below 18 years of age are not allowed at the property.
              </h6>
              <h6>
                PAN Card, Non-Govt IDs and Office ID are not accepted as ID
                proof(s)
              </h6>
              <h6>
                Passport, Aadhar, Driving License and Govt. ID are accepted as
                ID proof(s)
              </h6>
              <h6>Property staff is trained on hygiene guidelines</h6>
            </Box>

            <Box>
              <h6>Pets are not allowed</h6>
              <h6>Outside food is not allowed</h6>
              <h6>Smoking within the premises is not allowed</h6>
              <h6>Does not allow private parties or events</h6>
              <h6>
                Quarantine protocols are being followed as per local government
                authorities
              </h6>
            </Box>
          </Box>
        </Box>
      </Box>
      <hr />
    </>
  );
};

export default Singlehotel;

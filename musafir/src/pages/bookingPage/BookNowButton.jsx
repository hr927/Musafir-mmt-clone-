import styled from "styled-components";

import React, { useState } from "react";
import { TextField, Button, Typography, Modal, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import WalletIcon from "@mui/icons-material/Wallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Style = styled.div`
  button {
    margin: 20px;
    cursor: pointer;
    width: 230px;
    height: 35px;
    border-radius: 25px;
    background: linear-gradient(
      to right,
      #8f92fa 0%,
      #6165f0 50%,
      #6c70eb 50%,
      #3339e9 100%
    );
    border: none;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
`;

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

const BookNowButton = () => {
  const [value, setValue] = React.useState(0);
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
        alert("Flight Ticket Booked");
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
        alert("Flight Ticket Booked");
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Style>
        <button type="button" onClick={handleOpen}>
          CONTINUE
        </button>
      </Style>
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
                    sx={{ width: "10%" }}
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
    </>
  );
};

export default BookNowButton;

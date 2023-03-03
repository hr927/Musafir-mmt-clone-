import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
  AccordionDetails,
  AccordionSummary,
  Accordion,
  Modal,
  Tab,
  Tabs,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WalletIcon from "@mui/icons-material/Wallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Loader from "../components/Loader";

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

function BuyGifts() {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const [amount, setAmount] = useState(1000);
  const [sendVia, setSendVia] = useState("whatsapp");
  const [total, setTotal] = useState(amount);
  const [sender, setSender] = useState("");
  const [senderNum, setSenderNum] = useState("");
  const [senderMail, setSenderMail] = useState("");
  const [recip, setRecip] = useState("");
  const [recipNum, setRecipNum] = useState("");
  const [recipMail, setRecipMail] = useState("");
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
  const [loading, setLoading] = useState(false);
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

  const getData = async () => {
    let response = await axios.get(
      `https://musafir-backend.onrender.com/giftcards/${id}`
    );
    return response.data;
  };
  useEffect(() => {
    setLoading(true);
    getData().then((res) => {
      setCard(res);
      setLoading(false);
    });
  }, []);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setTotal(event.target.value);
  };

  const handleSendViaChange = (event) => {
    setSendVia(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  if (loading) {
    return <Loader />;
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "90%",
        padding: "10px",
        margin: "auto",
        paddingTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "column", "row"],
          width: "90%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: ["column", "column", "row"],
            width: ["100%", "70%"],
            margin: "auto",
            padding: "20px",
            border: "2px solid #f2f2f2",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: ["100%", "70%"],
            }}
          >
            <Typography sx={{ fontSize: ["15px", "20px"] }}>
              {card.title}
            </Typography>
            <img src={card.image} alt="" style={{ width: "80%" }} />
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "auto",
              width: ["100%", "30%"],
              rowGap: "20px",
            }}
          >
            <FormControl>
              <Typography>Send Via</Typography>
              <Select
                value={sendVia}
                onChange={handleSendViaChange}
                label="sendVia"
              >
                <MenuItem value="whatsapp">WhatsApp</MenuItem>
                <MenuItem value="email">Email</MenuItem>
              </Select>
            </FormControl>
            <TextField label="Quantity" value="1" disabled />
            <TextField
              label="Amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter Amount"
            />
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            width: ["100%", "25%"],
            margin: "auto",
            marginLeft: "30px",
            padding: "20px",
            border: "2px solid #f2f2f2",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={amount < 100}
            onClick={() => {
              if (sendVia === "whatsapp") {
                if (sender === "" || senderMail === "" || senderNum === "") {
                  alert("Please Enter All the Details");
                  return;
                }
                handleOpen();
              }
              if (sendVia === "email") {
                if (
                  sender === "" ||
                  senderMail === "" ||
                  senderNum === "" ||
                  recip === "" ||
                  recipMail === "" ||
                  recipNum === ""
                ) {
                  alert("Please Enter All the Details");
                  return;
                }
                handleOpen();
              }
            }}
          >
            Buy Now
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
          <Box>
            <Typography sx={{ padding: "10px" }}>Base Fare</Typography>
            <Typography
              sx={{ borderBottom: "1px solid #f2f2f2", padding: "10px" }}
            >
              {card.title} : ₹{amount}
            </Typography>
          </Box>
          <Typography
            sx={{ borderBottom: "1px solid #f2f2f2", padding: "10px" }}
          >
            Total: ₹{total}
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            margin: "auto",
            marginTop: "20px",
            padding: "20px",
            border: "2px solid #f2f2f2",
          }}
        >
          {" "}
          {sendVia === "whatsapp" ? (
            <h2>
              Purchase Details will be sent on below e-mail and mobile number
            </h2>
          ) : (
            <h2>Whom do you want to send this gift card to?</h2>
          )}
          {sendVia === "whatsapp" ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <h2>Senders Details</h2>
              <p>
                Delivery Confirmation and details will be sent on below e-mail
                and mobile number.
              </p>
              <TextField
                required
                id="filled-required"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                label="Sender's Name"
                variant="outlined"
              />
              <Box>
                <TextField
                  required
                  id="filled-required"
                  defaultValue="+91"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ width: "10%" }}
                />{" "}
                <TextField
                  required
                  id="filled-required"
                  label="Sender's Mobile"
                  value={senderNum}
                  onChange={(e) => setSenderNum(e.target.value)}
                  variant="outlined"
                />
              </Box>
              <TextField
                required
                id="filled-required"
                label="Sender's Email"
                value={senderMail}
                onChange={(e) => setSenderMail(e.target.value)}
                variant="outlined"
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: ["column", "column", "row"],
                rowGap: "10px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                  margin: "auto",
                }}
              >
                <h2>Recipients Details</h2>
                <p>
                  The gift card details will be sent on below e-mail and mobile
                  number.
                </p>
                <TextField
                  required
                  id="filled-required"
                  label="Recipient's Name"
                  value={recip}
                  onChange={(e) => setRecip(e.target.value)}
                  variant="outlined"
                />
                <Box>
                  <TextField
                    required
                    id="filled-required"
                    defaultValue="+91"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ width: "12%" }}
                  />{" "}
                  <TextField
                    required
                    id="filled-required"
                    label="Recipient's Mobile"
                    value={recipNum}
                    onChange={(e) => setRecipNum(e.target.value)}
                    variant="outlined"
                  />
                </Box>
                <TextField
                  required
                  id="filled-required"
                  label="Recipient's Email"
                  value={recipMail}
                  onChange={(e) => setRecipMail(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  required
                  id="filled-required"
                  label="Compose a Message"
                  variant="outlined"
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "10px",
                }}
              >
                <h2>Senders Details</h2>
                <p>
                  Delivery Confirmation and details will be sent on below e-mail
                  and mobile number.
                </p>
                <TextField
                  required
                  id="filled-required"
                  label="Sender's Name"
                  variant="outlined"
                />
                <Box>
                  <TextField
                    required
                    id="filled-required"
                    defaultValue="+91"
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                    }}
                    sx={{ width: "10%" }}
                  />{" "}
                  <TextField
                    required
                    id="filled-required"
                    label="Sender's Mobile"
                    variant="outlined"
                  />
                </Box>
                <TextField
                  required
                  id="filled-required"
                  label="Sender's Email"
                  variant="outlined"
                />
              </Box>
            </Box>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "63%",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
          border: "2px solid #f2f2f2",
        }}
      >
        {" "}
        <h2>How email sharing works</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            gap: "5px",
          }}
        >
          <img
            src="https://promos.makemytrip.com/appfest/2x/ic_gcdetails_mail_help.png"
            alt=""
          />
          <h4>
            Post successful payment, an e-mail will be sent by MakeMyTrip on
            behalf of you to your recipient.
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            gap: "5px",
          }}
        >
          <img
            src="https://promos.makemytrip.com/appfest/2x/ic_share_withfriends.png"
            alt=""
          />
          <h4>
            Just tap on share gift card option on the payment successful screen
            or from the gift card details in My Trips section of the app.
          </h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            gap: "5px",
          }}
        >
          <img
            src="https://promos.makemytrip.com/appfest/2x/ic_giftbox_green.png"
            alt=""
          />
          <h4>
            Once the purchase is complete, you can view the gift card details in
            My Trips section of the app.
          </h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "63%",
          margin: "auto",
          marginTop: "20px",
          padding: "20px",
          border: "2px solid #f2f2f2",
        }}
      >
        {" "}
        <h2>About This Card</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            gap: "5px",
            borderBottom: "2px solid #f2f2f2",
          }}
        >
          <h4>Valid on</h4>
          <h4>Flights, Hotels and Holidays Transactions only</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            gap: "5px",
            borderBottom: "2px solid #f2f2f2",
          }}
        >
          <h4>Valid upto</h4>
          <h4>365 days from date of issuance</h4>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "70%",
            margin: "auto",
            gap: "5px",
            borderBottom: "2px solid #f2f2f2",
          }}
        >
          <h4 style={{ color: "#008cff" }}>View All T&Cs</h4>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "#e7e7e7",
          padding: "10px",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        {" "}
        <Accordion
          sx={{
            backgroundColor: "#e7e7e7",
            color: "black",
            border: "1px solid black",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
            >
              Frequently Asked Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion
              sx={{
                backgroundColor: "#e7e7e7",
                color: "black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ color: "black", textDecoration: "underline" }}
                >
                  1. What is a MakeMyTrip Gift Card?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "black" }}>
                  A MakeMyTrip Gift Card is a gift voucher that can be bought by
                  anyone as a gift for any occasion. These gift cards can be
                  bought online from MakeMyTrip’s official website and app. The
                  monetary value of these cards starts from INR 1,000. There are
                  no extra charges on this voucher and the receiver can use the
                  whole amount. One can redeem the value while buying travel
                  packages, booking hotels, and booking flight tickets on
                  MakeMyTrip’s official website. It can be sent immediately over
                  email or WhatsApp to the receiver.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#e7e7e7",
                color: "black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ color: "black", textDecoration: "underline" }}
                >
                  2. What are the types of travel gift cards available on
                  MakeMyTrip?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "black" }}>
                  MakeMyTrip has a gift card for every occasion. There are
                  festive gift cards such as Diwali Gift Cards, Eid Mubarak Gift
                  Cards, Christmas Gift Cards, Onam Gift Cards, Bhaidoojh Gift
                  Cards, Karvachauth Gift Cards, and Rakshabandhan Gift Cards.
                  Surprise friends and family with Thank You Gift Cards,
                  Congratulations Gift Cards, Birthday Gift Cards, Mother’s Day
                  Gift Card and Father’s Day Gift Card. Delight your loved ones
                  with Wedding Gift Card, and Anniversary Gift Card. MakeMyTrip
                  has got you covered officially too with Corporate Gift Cards
                  and Farewell Gift Cards.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#e7e7e7",
                color: "black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ color: "black", textDecoration: "underline" }}
                >
                  3. How do I buy a MakeMyTrip Gift Card?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "black" }}>
                  To buy a MakeMyTrip Gift Card, you must log on to the official
                  website of MakeMyTrip (http://www.makemytrip.com/gift-cards/).
                  Select the occasion of the gift card and then enter the amount
                  and quantity. Mention the address and other details of the
                  receiver and add a personal touch to it by writing a message
                  on the gift card. Go through the regular checkout process
                  where you get the option to make a payment via credit card,
                  debit card and net banking. You will get an email confirming
                  your purchase of the gift card. It will be sent via email to
                  the receiver.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#e7e7e7",
                color: "black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ color: "black", textDecoration: "underline" }}
                >
                  4. How to add or redeem a gift card?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "black" }}>
                  The gift card can be redeemed to book flights, hotels, and
                  holiday packages. You can redeem it online at
                  www.makemytrip.com or on the Android & IOS apps. Go to “More
                  Options” and then select “Gift Card” as your payment mode.
                  Enter your gift card no. (16 digits) and the 6-digit PIN.
                  After clicking on the "Make Payment" tab, you can pay the
                  balance amount (if any) using other payment modes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#e7e7e7",
                color: "black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ color: "black", textDecoration: "underline" }}
                >
                  5. What happens to the gift card if I cancel my booking?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "black" }}>
                  You can book flights and hotels and buy holiday packages using
                  your gift card. If you plan to postpone or cancel your
                  booking, the cancellation charge will be deducted from the
                  card and the remaining amount will be refunded to the same
                  card. You can use the gift card no. (16 digits) and 6-digit
                  PIN no. to pay while booking a flight, hotel, or holiday
                  package.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#e7e7e7",
                color: "black",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{ color: "black", textDecoration: "underline" }}
                >
                  6. What are the customer support details?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "black" }}>
                  You can send an email to support@giftbig.com or call at
                  0124–4628747 for any queries related to order status,
                  delivery, purchase, or usage of gift cards. Holiday packages
                  can be booked offline. For that, you must call customer care
                  at (+91) 9599595618 or write to gifts@makemytrip.com. For
                  providing feedback and any other concerns about any gift card,
                  you can write to feedback.giftvouchers@makemytrip.com.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "#e7e7e7",
            color: "black",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}
            >
              Terms & Conditions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "black" }}>
              <p>
                The Gift card is valid for purchases made from Makemytrip only
                and is valid for a period of 12 Months from the date of
                Purchase.
              </p>
              <p>For Flights, Hotels & Holidays :</p>
              <p>
                Can be redeemed online at www.makemytrip.com or on MakeMyTrip
                Android & IOS app. Please follow the steps listed below:
              </p>
              <p>
                Select your Flight/ Hotel and fill required details till you
                reach the payment page.
              </p>
              <p>
                On Website, click on "More options" and Select "Gift Card" as
                your Payment Mode. On Android and IOS app, choose Gift Card as
                the payment option
              </p>
              <p>
                Enter your Gift Card/ Card No. (16 Digit) and 6 Digit Pin No.
              </p>
              <p>
                Click on "Make Payment" and Pay the Balance amount (if any)
                using other Payment Modes Listed.
              </p>
              <p>Flights & Hotels are not redeemable offline.</p>
              <p>
                For redeeming Holidays offline through our Holiday Experts :
              </p>
              <p>Please call on the understated number to redeem the card.</p>
              <p>Domestic Holiday packages: 9599595601</p>
              <p>International Holiday packages: 9599595618</p>
              <p>Alternatively you can also write on gifts@makemytrip.com</p>
              <p>You can also visit the MakeMyTrip Branches to redeem.</p>
              <p>This Gift card is not valid on Bus, Rail and Car bookings.</p>
              <p>
                Gift cards are valid on bookings made through MMT Mobile App.
              </p>
              <p>
                In case of transaction failures after Gift Card is applied,
                amount would be automatically refunded to the same cards within
                72 hours.
              </p>
              <p>
                This Gift card/voucher cannot be clubbed with any other ongoing
                offer discount/cash back/promotion run by Makemytrip.com on app
                or website.
              </p>
              <p>
                This Gift card is valid for partial redemption. Balance would
                remain in the Gift Card till the validity period and can be
                reused for multiple transactions.
              </p>
              <p>
                Multiple Gift Cards (up to 3) can be combined and used on 1
                transaction.
              </p>
              <p>Products and services are subject to availability.</p>
              <p>The Gift card cannot be cancelled or exchanged for cash.</p>
              <p>
                The Gift card validity cannot be extended under any
                circumstances.
              </p>
              <p>
                Gift Card code/Physical copy or both to be provided at the time
                of booking along with an ID proof for the offline redemption.
              </p>
              <p>
                MakeMyTrip is not responsible if the Gift card is lost, stolen
                or used without permission.
              </p>
              <p>
                In case of cancellation of bookings made using the gift card
                within the validity period, the amount will be reversed to the
                same card as used at the time of booking.
              </p>
              <p>
                Users are required to save the gift card number and PIN to
                utilize this refunded amount as we will not be able to reset the
                PIN or reissue a new gift card number.
              </p>
              <p>
                In case of cancellations where the gift card validity has
                expired, no refund will be processed for the amount paid by the
                gift card.
              </p>
              <p>
                MakeMyTrip is the final authority on the interpretation of these
                rules
              </p>
              <p>
                MakeMyTrip reserves the right to deny accepting any Gift card if
                it suspects that there is duplicity of cards.
              </p>
              <p>
                In no event the liability of MakeMyTrip for any claims shall
                exceed the value of the card.
              </p>
              <p>
                In the event of any dispute, parties agree to exclusive
                jurisdiction of courts of New Delhi.
              </p>
              <p>
                This is for individual use only, Travel agents found using the
                card would lead to cancellation of booking and no refund would
                be made.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}

export default BuyGifts;

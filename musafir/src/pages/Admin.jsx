import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Card,
  CardContent,
  Button,
  Modal,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Table,
  TableContainer,
  Paper,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [open, setOpen] = React.useState(false);
  const [gift, setGift] = useState({});
  const [giftTitle, setGiftTitle] = useState("");
  const [giftImage, setGiftImage] = useState("");
  const [giftCat, setgiftCat] = useState("");
  const [users, setUsers] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [gifts, setGifts] = useState([]);

  const getUsers = async () => {
    let response = await axios.get(
      `https://musafir-backend.onrender.com/users`
    );
    return response.data;
  };

  const getHotels = async () => {
    let response = await axios.get(
      `https://musafir-backend.onrender.com/hotels?_page=1&_limit=10`
    );
    return response.data;
  };

  const getGifts = async () => {
    let response = await axios.get(
      `https://musafir-backend.onrender.com/giftcards?_page=1&_limit=10`
    );
    return response.data;
  };

  useEffect(() => {
    getUsers().then((res) => setUsers(res));
    getHotels().then((res) => setHotels(res));
    getGifts().then((res) => setGifts(res));
  }, []);

  function createGiftData(title, category) {
    return { title, category };
  }
  const giftRows = [gifts.map((el) => createGiftData(el.title, el.category))];

  function createHotelData(name, location) {
    return { name, location };
  }
  const hotelRows = [
    hotels.map((el) => createHotelData(el.wordBreak, el.pc__html)),
  ];

  function createUserData(name, email) {
    return { name, email };
  }

  const userRows = [
    users.map((el) => createUserData(el.displayName, el.email)),
  ];

  const handleTabChange = (newValue) => {
    setSelectedTab(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const smallScreen = useMediaQuery("(max-width: 600px)");
  const mediumScreen = useMediaQuery("(max-width: 960px)");
  return (
    <div style={{ paddingTop: "100px" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ color: "black" }}>
            Admin
          </Typography>
          <TextField
            id="search"
            label="Search"
            type="search"
            variant="outlined"
            style={{ marginLeft: "auto", marginRight: "20px" }}
          />
          <IconButton edge="start" color="inherit" aria-label="menu">
            <SettingsIcon sx={{ color: "gray" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div
        style={{
          display: "flex",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "10%",
            padding: "2%",
            backgroundColor: "#eeeeee",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            height: "100vh",
            textAlign: "center",
          }}
        >
          <div
            style={{
              border: "none",
              fontSize: "20px",
              color: "Black",
              cursor: "pointer",
            }}
            onClick={() => handleTabChange("Dashboard")}
          >
            Dashboard
          </div>
          <div
            style={{
              border: "none",
              fontSize: "20px",
              color: "Black",
              cursor: "pointer",
            }}
            onClick={() => handleTabChange("Users")}
          >
            Users
          </div>
          <div
            style={{
              border: "none",
              fontSize: "20px",
              color: "Black",
              cursor: "pointer",
            }}
            onClick={() => handleTabChange("Hotels")}
          >
            Hotels
          </div>
          <div
            style={{
              border: "none",
              fontSize: "20px",
              color: "Black",
              cursor: "pointer",
            }}
            onClick={() => handleTabChange("Gifts")}
          >
            Gifts
          </div>
        </div>
        {selectedTab === "Dashboard" && (
          <div
            style={{
              display: "flex",
              width: "80%",
              flexDirection: "column",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <div>
              <h1>Dashboard</h1>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                height: "50%",
                justifyContent: "center",
              }}
            >
              {" "}
              <Card
                style={{
                  width: smallScreen ? "100%" : mediumScreen ? "40%" : "20%",
                  height: "40%",
                  margin: "20px",
                  backgroundColor: "#f44336",
                }}
              >
                <CardContent>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    Users
                  </Typography>
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    10
                  </Typography>
                </CardContent>
              </Card>
              <Card
                style={{
                  width: smallScreen ? "100%" : mediumScreen ? "40%" : "20%",
                  height: "40%",
                  margin: "20px",
                  backgroundColor: "#2196f3",
                }}
              >
                <CardContent>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    Airlines
                  </Typography>
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    4
                  </Typography>
                </CardContent>
              </Card>
              <Card
                style={{
                  width: smallScreen ? "100%" : mediumScreen ? "40%" : "20%",
                  height: "40%",
                  margin: "20px",
                  backgroundColor: "#4caf50",
                }}
              >
                <CardContent>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    Hotels
                  </Typography>
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    48
                  </Typography>
                </CardContent>
              </Card>
              <Card
                style={{
                  width: smallScreen ? "100%" : mediumScreen ? "40%" : "20%",
                  height: "40%",
                  margin: "20px",
                  backgroundColor: "#ff9800",
                }}
              >
                <CardContent>
                  <Typography variant="h5" style={{ textAlign: "center" }}>
                    Gifts
                  </Typography>
                  <Typography variant="h4" style={{ textAlign: "center" }}>
                    19
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
        {selectedTab === "Users" && (
          <div style={{ width: "70%" }}>
            <div
              style={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div>
                <h1>Users</h1>
              </div>
              <div style={{ width: "80%", margin: "auto" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {userRows[0].map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        )}
        {selectedTab === "Hotels" && (
          <div style={{ width: "70%" }}>
            <div
              style={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div>
                <h1>Hotels</h1>
              </div>
              <div style={{ width: "80%", margin: "auto" }}>
                {" "}
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Location</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {hotelRows[0].map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">
                            {row.location
                              ? row.location
                              : "Location update needed"}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        )}
        {selectedTab === "Gifts" && (
          <div style={{ width: "70%" }}>
            <div
              style={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <div>
                <h1>Gifts</h1>
                {/* <Button onClick={handleOpen}>Add new Gift</Button> */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <TextField
                      label="Gift Title"
                      value={giftTitle}
                      onChange={(e) => setGiftTitle(e.target.value)}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Gift Image"
                      value={giftImage}
                      onChange={(e) => setGiftImage(e.target.value)}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Gift Category"
                      value={giftCat}
                      onChange={(e) => setgiftCat(e.target.value)}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <Button
                      onClick={() => {
                        setGift({
                          title: { giftTitle },
                          image: { giftImage },
                          category: { giftCat },
                        });
                        setGiftTitle("");
                        setGiftImage("");
                        setgiftCat("");
                        handleClose();
                      }}
                    >
                      Done
                    </Button>
                  </Box>
                </Modal>
              </div>
              <div style={{ width: "80%", margin: "auto" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Category</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {giftRows[0].map((row, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.title}
                          </TableCell>
                          <TableCell align="right">{row.category}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;

import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import firebase from "firebase/compat/app";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import {
  AccountBalanceWallet,
  CardTravel,
  CreditCard,
} from "@mui/icons-material";
import { Container } from "@mui/system";
import { useSelector } from "react-redux";
import { loginAction } from "../redux/AuthReducer/auth.actions";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userData = useSelector((store) => store.auth.user[0]);

  console.log(userData);
  const profilePic = userData?.photoURL;
  const displayName = userData.displayName;
  const userEmail = userData.email;
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const navigate=useNavigate()
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={profilePic} sx={{ width: 32, height: 32 }}>
              {profilePic ? "" : displayName[0]}
            </Avatar>
          </IconButton>
        </Tooltip>
        <Typography sx={{ color: "black", ml: "10px" }}>
          Hi ! {displayName.split(" ").map(String)[0]}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Typography
          varient="p"
          sx={{ fontSize: "10px", width: "60%", ml: "10px", p: "10px" }}
        >
          {" "}
          You are viewing your personal profile {userEmail}
        </Typography>
        <MenuItem>
          <Avatar src={profilePic} />
          <Container onClick={()=>navigate("/profile")} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography  sx={{ marginLeft: "-10px" }}>My Profile</Typography>

            <Typography
              varient="p"
              sx={{
                fontSize: "10px",
                width: "20%",

                display: "block",
              }}
            >
              {" "}
              Manage your profile ,traveller details,login details and password
            </Typography>
          </Container>
        </MenuItem>
        <MenuItem>
          <CardTravel />
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>My Trips</Typography>

            <Typography
              varient="p"
              sx={{
                fontSize: "10px",
                width: "20%",
                ml: "10px",
                display: "block",
              }}
            >
              {" "}
              See booking details ,Print e-ticket,Cancel Booking,Modify
              Booking,Check Refund Status & more.
            </Typography>
          </Container>
        </MenuItem>
        <MenuItem>
          <AccountBalanceWallet />
          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>My Wallet</Typography>

            <Typography
              varient="p"
              sx={{
                fontSize: "10px",
                width: "20%",
                ml: "10px",
                display: "block",
              }}
            >
              {" "}
              Use your wallet money to avail even greater discounts
            </Typography>
          </Container>
        </MenuItem>
        <MenuItem>
          <CreditCard />

          <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Make a Payment</Typography>

            <Typography
              varient="p"
              sx={{
                fontSize: "10px",
                width: "20%",
                ml: "10px",
                display: "block",
              }}
            >
              {" "}
              Complete your pending payments here
            </Typography>
          </Container>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

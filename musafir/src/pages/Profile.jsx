import { Avatar, Container, Modal } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../components/Login";
import { loginAction, logoutAction } from "../redux/AuthReducer/auth.actions";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { deepOrange, lightGreen } from "@mui/material/colors";
import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import InfoIcon from "@mui/icons-material/Info";
import LinearProgress from "@mui/joy/LinearProgress";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
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

function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, detail, fat, carbs, protein) {
  return { name, detail, fat, carbs, protein };
}

function CustomizedTables() {
  const userData = useSelector((store) => store.auth.user[0]);
  const displayName = userData?.displayName;
  const [Birthday, setBirthday] = useState("Add+");
  const [Gender, setGender] = useState("Add+");
  const [Marital, setMarital] = useState("Add+");

  const rows = [
    createData("Name", displayName),
    createData("Birthday", Birthday),
    createData("Gender", Gender),
    createData("Marital Status", Marital),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.detail === "Add+" ? <Button>Add+</Button> : row.detail}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
function CustomizedTables2() {
  const userData = useSelector((store) => store.auth.user[0]);
  const Email = userData?.email;
  const [Mobile, setMobile] = useState("Add+");
  const [Password, setPassword] = useState("******");

  const [Marital, setMarital] = useState("Add+");

  const rows = [
    createData("Mobile  Number", Mobile),
    createData("EMAIL ID", Email),
    createData("PASSWORD", Password),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.detail === "Add+" ? <Button>Add+</Button> : row.detail}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const bs =
  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
function TabsVertical({ scrollToRef, logOut }) {
  const [value, setValue] = React.useState(0);
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      defaultValue={0}
      sx={{ minWidth: 300, borderRadius: "lg" }}
    >
      <TabList sx={{ border: "1px solid black", margin: "auto", mt: "30px" }}>
        <Tab
          onClick={() => {
            setValue(0);
            scrollToRef("myRef1");
          }}
          sx={
            value === 0
              ? {
                  display: "flex",
                  justifyContent: "space-around",
                  boxShadow: bs,
                  gap: "10px",
                }
              : { display: "flex", justifyContent: "space-around", gap: "10px" }
          }
        >
          <PersonIcon />
          <Typography sx={{ fontSize: "20px" }}> Profile</Typography>
        </Tab>
        <Tab
          onClick={() => {
            setValue(1);
            scrollToRef("myRef2");
          }}
          sx={
            value === 1
              ? {
                  display: "flex",
                  justifyContent: "space-around",
                  boxShadow: bs,
                  gap: "10px",
                }
              : { display: "flex", justifyContent: "space-around", gap: "10px" }
          }
        >
          <InfoIcon />
          <Typography sx={{ fontSize: "20px" }}> Details</Typography>
        </Tab>
        <Tab
          onClick={() => {
            setValue(2);
            logOut();
          }}
          sx={
            value === 2
              ? {
                  display: "flex",
                  justifyContent: "space-around",
                  boxShadow: bs,
                  gap: "10px",
                }
              : { display: "flex", justifyContent: "space-around", gap: "10px" }
          }
        >
          <LogoutIcon />
          <Typography sx={{ fontSize: "20px" }}>Logout</Typography>
        </Tab>
      </TabList>
      {/* <TabPanel value={0} sx={{ p: 2 }}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1} sx={{ p: 2 }}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2} sx={{ p: 2 }}>
        <b>Third</b> tab panel
      </TabPanel> */}
    </Tabs>
  );
}

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logoutAction());
        navigate("/");
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const userData = useSelector((store) => store.auth.user[0]);

  const profilePic = userData?.photoURL;
  const displayName = userData.displayName;
  const userEmail = userData.email;
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);

  function scrollToRef(ref) {
    switch (ref) {
      case "myRef1":
        myRef1.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "myRef2":
        myRef2.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  return (
    <Box
      sx={{ width: "80%", margin: "auto", marginTop: "20px" }}
      display="grid"
      direction="row"
      gridTemplateColumns="30% 70%"
      gap={2}
    >
      <Card
        sx={{
          minWidth: 275,
          maxHeight: "400px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        <Avatar
          sx={{
            bgcolor: lightGreen[400],
            width: "40%",
            height: "40%",
            margin: "auto",
          }}
          alt="Remy Sharp"
          src={profilePic}
          variant="square"
        />
        <Typography
          level="h1"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "block",
            width: "100%",
            textAlign: "center",
            margin: "auto",
            marginTop: "10px",
          }}
        >
          {displayName}
        </Typography>
        <TabsVertical logOut={logOut} scrollToRef={scrollToRef} />
      </Card>
      <Box display={"grid"} gap="20px" sx={{ overflowY: "scroll" }}>
        <Card
          sx={{ minWidth: 275, border: "1px solid black", padding: "20px" }}
        >
          <CardContent>
            <Box>
              <Box sx={{ display: "flex", gap: "20px", fontWeight: "bold" }}>
                <Box>Complete your Profile</Box>
                <Box>40%</Box>
              </Box>
              <br />
              <LinearProgress
                determinate
                sx={{ border: "1px solid black", width: "40%" }}
                size="lg"
                value={40}
              />
            </Box>
            <Box></Box>
          </CardContent>
        </Card>
        <Card
          sx={{ minWidth: 275, border: "1px solid black", padding: "20px" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box ref={myRef1}>
              <Typography fontWeight={"bold"} fontSize={"30px"}>
                Profile
              </Typography>
              <Typography fontSize={"20px"}>
                Basic info, for a faster booking experience
              </Typography>
            </Box>
            <Button>Edit</Button>
          </Box>
          <Box>
            <CustomizedTables />
          </Box>
        </Card>
        <Card
          sx={{ minWidth: 275, border: "1px solid black", padding: "20px" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box ref={myRef2}>
              <Typography fontWeight={"bold"} fontSize={"30px"}>
                Login Details
              </Typography>
              <Typography fontSize={"20px"}>
                Manage your email address mobile number and password
              </Typography>
            </Box>
            <Button>Edit</Button>
          </Box>
          <Box>
            <CustomizedTables2 />
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;

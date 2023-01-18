import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Divider, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Animation from "./Animation";
import { Input } from "@mui/material";
import { Stack } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

const Page1 = ({ handleEmail, setEmail, SignInWithGoogle }) => {
  return (
    <Box>
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Enter Email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <Button
        style={{ backgroundColor: "#008cff" }}
        size="large"
        sx={{ m: 1, width: "90%", height: "100%" }}
        variant="contained"
        onClick={() => {
          handleEmail();
        }}
      >
        CONTINUE
      </Button>
      <Stack
        mt={"20px"}
        display={"flex"}
        justifyContent="center"
        direction={"row"}
      >
        <Button onClick={SignInWithGoogle} sx={{ borderRadius: "60%" }}>
          <img
            display="block"
            height={"50px"}
            width="50px"
            src="https://img.icons8.com/color/512/google-logo.png"
            alt="google-icon"
          />
        </Button>
      </Stack>
      <p style={{ fontSize: "12px" }}>
        By proceeding, you agree to Musafir's Privacy Policy, User Agreement and
        T&Cs
      </p>
    </Box>
  );
};
const Page2 = () => {
  return (
    <Box>
      <TextField
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
      />
      <TextField
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Enter Email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Set up Password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button
        style={{ backgroundColor: "#008cff" }}
        size="large"
        sx={{ m: 1, width: "90%", height: "100%" }}
        variant="contained"
        onClick={() => {}}
      >
        CONTINUE
      </Button>
      <Stack
        mt={"20px"}
        display={"flex"}
        justifyContent="center"
        direction={"row"}
      ></Stack>
      <p style={{ fontSize: "12px" }}>
        By proceeding, you agree to Musafir's Privacy Policy, User Agreement and
        T&Cs
      </p>
    </Box>
  );
};

const ComponentA = ({
  value,
  props,
  handleChange,
  handleEmail,
  setEmail,
  SignInWithGoogle,
}) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          backgroundColor="blue"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            "& .MuiTabs-indicator": { backgroundColor: "blue" },
            "& .MuiTab-root": { color: "blue" },
            "& .Mui-selected": { color: "blue" },
            fontSize: "500",
          }}
          variant="fullWidth"
        >
          <Tab
            sx={{ fontSize: "15px" }}
            value="one"
            label="PERSONAL ACCOUNT"
          ></Tab>
          <Tab sx={{ fontSize: "15px" }} value="two" label="SIGN UP" />
        </Tabs>
        <Box
          backgroundColor="
#eaf5ff"
        >
          <Animation {...props} />
        </Box>
      </Box>

      {value === "one" ? (
        <Page1
          setEmail={setEmail}
          handleEmail={handleEmail}
          SignInWithGoogle={SignInWithGoogle}
        />
      ) : null}
      {value === "two" ? <Page2 /> : null}
    </>
  );
};

const ComponentB = ({ email, password, setpassword, setflip }) => {
  email = email[0] + email[1] + email[2] + "*****@gmail.com";
  const [disablebtn, setDisablebtn] = React.useState(true);
  return (
    <>
      <Button onClick={() => setflip(false)}>BACK</Button>
      <Typography variant="h5">Login With Password</Typography>
      <Typography variant="p">For account {email}</Typography>

      <TextField
        onChange={(e) => {
          setpassword(e.target.value);
          if (password.length >= 6) {
            setDisablebtn(false);
          } else {
            setDisablebtn(true);
          }
        }}
        size="small"
        sx={{ m: 1, mt: 3, width: "90%" }}
        placeholder="Enter Email"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <Button
        disabled={disablebtn}
        style={
          disablebtn ? { backgroundColor: "" } : { backgroundColor: "#008cff" }
        }
        size="large"
        sx={{ m: 1, width: "90%" }}
        variant="contained"
        onClick={() => {}}
      >
        Login
      </Button>
      <p style={{ fontSize: "12px" }}>
        By proceeding, you agree to Musafir's Privacy Policy, User Agreement and
        T&Cs
      </p>
    </>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};
const LogginButton = ({ SignInWithGoogle }) => {
  const [email, setEmail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("one");

  const [content, setContent] = React.useState("Hello");

  const [flip, setflip] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const contentArray = [
    "Login for great deals and offers",
    "Book your 1st international trip",
    "Join the club of 10 crore+ happy travellers",
  ];
  const props = {
    animationType: "blocks",
    tag: "h3",
    content: content,
  };
  let id;
  const AnimationInterval = () => {
    let i = 0;
    id = setInterval(() => {
      setContent(contentArray[i]);

      if (i === 2) {
        i = 0;
      }
      i++;
    }, 3000);
  };

  React.useEffect(() => {
    AnimationInterval();
    return () => clearInterval(id);
  }, []);

  const handleEmail = () => {
    if (email.includes("@")) {
      setflip(true);
    } else {
      alert("Enter Correct Email");
    }
  };

  return (
    <div>
      <Button
        onClick={() => {
          handleOpen();
        }}
      >
        Open modal
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {!flip ? (
              <ComponentA
                SignInWithGoogle={SignInWithGoogle}
                setEmail={setEmail}
                handleEmail={handleEmail}
                props={props}
                handleChange={handleChange}
                value={value}
              />
            ) : (
              <ComponentB
                setflip={setflip}
                password={password}
                setpassword={setpassword}
                email={email}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default LogginButton;

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import {  Typography } from "@mui/material";
import PropTypes from "prop-types";
import ComponentA from "./smallComponents/ComponentA";
import ComponentB from "./smallComponents/ComponentB";

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

  const [content, setContent] = React.useState("Hello !");

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

  const CA = React.useCallback(ComponentA, []);
  const CB = React.useCallback(ComponentB, []);

  return (
    <>
      <Button
        sx={{ color: "white" }}
        onClick={() => {
          handleOpen();
        }}
      >
        Login or Create an Account
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
              <CA
                SignInWithGoogle={SignInWithGoogle}
                setEmail={setEmail}
                handleEmail={handleEmail}
                props={props}
                handleChange={handleChange}
                value={value}
              />
            ) : (
              <CB
                setflip={setflip}
                password={password}
                setpassword={setpassword}
                email={email}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default React.memo( LogginButton);

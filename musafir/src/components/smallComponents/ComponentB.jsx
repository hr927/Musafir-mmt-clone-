import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manualSignin } from "../../redux/AuthReducer/auth.actions";

const ComponentB = ({ email, password, setpassword, setflip }) => {
  const secret = email[0] + email[1] + email[2] + "*****@gmail.com";
  const [disablebtn, setDisablebtn] = React.useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(event) {
    if (email.includes("@musafir.com") && password === "musafir") {
      navigate("/admin");
    } else {
      dispatch(manualSignin(email, password));
    }
  }
  return (
    <>
      <Button onClick={() => setflip(false)}>BACK</Button>
      <Typography variant="h5">Login With Password</Typography>
      <Typography variant="p">For account {secret}</Typography>

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
        type="password"
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
        onClick={handleSubmit}
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

export default React.memo(ComponentB);

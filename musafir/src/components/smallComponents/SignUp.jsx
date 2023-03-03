import { Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../redux/AuthReducer/auth.actions";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setname] = React.useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(signup(email, password, name));
  }
  return (
    <Box>
      <TextField
        value={name}
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Name"
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e) => setname(e.target.value)}
      />
      <TextField
        value={email}
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Enter Email"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={password}
        size="small"
        sx={{ m: 1, width: "90%", height: "100%" }}
        placeholder="Set up Password"
        id="outlined-basic"
        type="password"
        label="Password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        style={{ backgroundColor: "#008cff" }}
        size="large"
        sx={{ m: 1, width: "90%", height: "100%" }}
        variant="contained"
        onClick={handleSubmit}
      >
        Sign Up
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

export default React.memo(SignUp);

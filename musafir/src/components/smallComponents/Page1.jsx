import { Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

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

  export default React.memo(Page1)
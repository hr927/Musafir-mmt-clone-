import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Page1 from "./Page1";
import SignUp from "./SignUp";
import Animation from "../Animation"
const ComponentA = ({
    value,
    props,
    handleChange,
    handleEmail,
    setEmail,
    SignInWithGoogle,
  }) => {
    const P1 = React.useCallback(Page1, []);
    const P2 = React.useCallback(SignUp, []);
  
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
          <P1
            setEmail={setEmail}
            handleEmail={handleEmail}
            SignInWithGoogle={SignInWithGoogle}
          />
        ) : null}
        {value === "two" ? <P2 /> : null}
      </>
    );
  };

    export default React.memo(ComponentA)
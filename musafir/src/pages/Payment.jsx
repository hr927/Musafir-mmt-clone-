import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Payment = () => {
  return (
    <Box
      sx={{ width: "80%", margin: "auto", marginTop: "20px" }}
      display="grid"
      direction="row-reverse"
      gridTemplateColumns="70% 30%"
      gap={2}
    >
      <Card
        sx={{
          minWidth: 275,
          maxHeight: "400px",
          border: "1px solid black",
          padding: "20px",
        }}
      ></Card>
      <Box display={"grid"} gap="20px" sx={{ overflowY: "scroll" }}>
        <Card
          sx={{ minWidth: 275, border: "1px solid black", padding: "20px" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography fontWeight={"bold"} fontSize={"20px"}>
                Fare Summary
              </Typography>
            </Box>
            <Typography fontWeight={"bold"} fontSize={"15px"}></Typography>
          </Box>
          <br />
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography fontWeight={"bold"} fontSize={"15px"}>
                  Base Fares
                </Typography>
              </Box>
              <Typography fontWeight={"bold"} fontSize={"15px"}>
                ₹360
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography fontWeight={"bold"} fontSize={"15px"}>
                  Fee & Surcharges
                </Typography>
              </Box>

              <Typography fontWeight={"bold"} fontSize={"15px"}>
                ₹360
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography fontWeight={"bold"} fontSize={"15px"}>
                  Other Services
                </Typography>
              </Box>
              <Typography fontWeight={"bold"} fontSize={"15px"}>
                ₹360
              </Typography>
            </Box>
            <br />
            <Divider sx={{ border: "2px solid black" }}></Divider>
            <br />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography fontWeight={"bold"} fontSize={"18px"}>
                  Total Amount
                </Typography>
              </Box>
              <Typography fontWeight={"bold"} fontSize={"18px"}>
                ₹360
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{ minWidth: 275, border: "1px solid black", padding: "20px" }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography fontWeight={"bold"} fontSize={"25px"}>
                Promo Codes
              </Typography>
              <Typography fontSize={"20px"}>
                Manage your email address mobile number and password
              </Typography>
            </Box>
            <Typography fontWeight={"bold"} fontSize={"15px"}></Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box></Box>
            <Typography fontWeight={"bold"} fontSize={"15px"}>
              Other Services
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default Payment;

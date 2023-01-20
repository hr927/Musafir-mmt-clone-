import { Avatar, Container, } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
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


 function TabsVertical() {
  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      defaultValue={0}
      sx={{ minWidth: 300, borderRadius: 'lg' }}
    >
      <TabList>
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0} sx={{ p: 2 }}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1} sx={{ p: 2 }}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2} sx={{ p: 2 }}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}

const Profile = () => {
  const dispatch = useDispatch();
  console.log("hello");
  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logoutAction());
        console.log("logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <Box
      sx={{ width: "80%", margin: "auto" }}
      display="grid"
      direction="row"
      gridTemplateColumns="30% 70%"
      gap={2}
    >
      <Card
        sx={{ minWidth: 275, border: "1px solid black" }}
      >
        <Avatar
          sx={{
            bgcolor: lightGreen[400],
            width: "50%",
            height: "30%",
            margin: "auto",
          }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
          variant="square"
        />
        <Typography
          level="h1"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            display: "block",
            width: "50%",
            margin: "auto",
          }}
        >
          Faisal Mujtaba
        </Typography>
        <TabsVertical/>
      </Card>
      <Box display={"grid"} gap="20px">
        <Card sx={{ minWidth: 275, border: "1px solid black" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, border: "1px solid black" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card sx={{ minWidth: 275, border: "1px solid black" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div"></Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

export default Profile;

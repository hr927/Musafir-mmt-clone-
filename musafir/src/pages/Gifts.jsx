import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/system";

const Gifts = () => {
  const navigate = useNavigate();
  const [gifts, setGifts] = useState([]);
  const [filter, setFilter] = useState("all");
  const getData = async () => {
    let response = await axios.get(`http://localhost:8080/giftcards`);

    return response.data;
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredData = gifts.filter((item) => {
    if (filter === "all") {
      return item;
    }
    return item.category === filter;
  });
  useEffect(() => {
    getData().then((res) => setGifts(res));
  }, []);
  return (
    <div>
      <div style={{ display: "flex", width: "80%", margin: "auto" }}>
        <div style={{ flex: "1" }}>
          <div>
            <FormControl
              sx={{
                border: "1px solid #f2f2f2",
                padding: "20px",
                margin: "auto",
                marginTop: "50px",
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <FormLabel id="demo-controlled-radio-buttons-group">
                <h2>Category</h2>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={filter}
                onChange={handleFilter}
              >
                <FormControlLabel
                  value="all"
                  control={<Radio />}
                  label={<h2>All</h2>}
                />
                <FormControlLabel
                  value="ocassion"
                  control={<Radio sx={{ marginTop: "-40px" }} />}
                  label={
                    <h2>
                      Ocassion
                      <p>
                        Select cards for special occasions for your loved ones
                      </p>
                    </h2>
                  }
                />
                <FormControlLabel
                  value="festival"
                  control={<Radio sx={{ marginTop: "-40px" }} />}
                  label={
                    <h2>
                      Festivals{" "}
                      <p>
                        Select cards for every special festival that you
                        celebrate
                      </p>
                    </h2>
                  }
                />
                <FormControlLabel
                  value="loved"
                  control={<Radio sx={{ marginTop: "-20px" }} />}
                  label={
                    <h2>
                      Loved Ones <p>Travel specific cards</p>
                    </h2>
                  }
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div
          style={{
            flex: "4",
            margin: "auto",
            padding: "20px",
          }}
        >
          <h1>Gift Cards</h1>
          <img
            src="https://promos.makemytrip.com/appfest/2x/Gift-Card-top-banner.jpg"
            alt=""
            style={{ borderRadius: "25px", width: "90%" }}
          />
          <Grid
            container
            spacing={2}
            columns={18}
            sx={{
              width: "90%",
              margin: "auto",
              marginTop: "20px",
              gap: "25px",
              justifyContent: "center",
            }}
          >
            {filteredData.map((el) => (
              <Grid
                xs={5}
                key={el.id}
                sx={{
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "auto",
                  }}
                  onClick={() => navigate(`/gift-cards/${el.id}`)}
                >
                  <img
                    src={el.image}
                    style={{
                      display: "block",
                      alignSelf: "center",
                      width: "100%",
                      borderRadius: "25px",
                    }}
                    alt=""
                  />
                  <h3>{el.title}</h3>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Gifts;

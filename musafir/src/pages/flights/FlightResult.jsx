import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FlightResult.module.css";

function FlightResult() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [sortValue, setSortValue] = useState([]);
  const sortLH = ["price"];

  useEffect(() => {
    loadFlightData();
  }, []);

  const loadFlightData = async () => {
    return await axios
      .get("http://localhost:8080/data")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  console.log("data", data);
  const handleSort = (e) => {
    // sorting(e.target.checked);
  };
  const handleHigh = (e) => {
    // sorthigh(e.target.checked);
  };

  //   const handleSort = async (e) => {
  //     let value = e.target.value;
  //     setSortValue(value);
  //     return await axios
  //       .get(`http://localhost:8080/data?_sort=${value}&_order=asc`)
  //       .then((response) => setData(response.data))
  //       .catch((err) => console.log(err));
  //   };

  //   const handleSearch = async (e) => {
  //     e.preventDefault();
  //     return await axios
  //       .get(`http://localhost:8080/data?q=${value}`)
  //       .then((response) => setData(response.data))
  //       .catch((err) => console.log(err));
  //   };
  return (
    <div className={styles.container}>
      {/* <form className="form" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control"
          placeholder="City Nmae"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}

      <div className={styles.left}>
        <div className={styles.filters}>
          <div className={styles.firstFilter}>
            <h3>Sort by price</h3>
            <div className={styles.divi}>
              <input type="checkbox" onChange={handleSort} />
              <p>Low to High</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>High to Low</p>
            </div>
          </div>
          <div className={styles.firstFilter}>
            <h3>Popular Filters</h3>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>stop</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>Late Departures</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>Refundable Fares</p>
            </div>
          </div>
          <div className={styles.firstFilter}>
            <h3>Alliances & Airlines</h3>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>Air India</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>IngiGO</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>SpiceJet</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>GoAir</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>Vistara</p>
            </div>
          </div>
          <div className={styles.firstFilter}>
            <h3>Layover Airports</h3>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>IGI</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" />
              <p>CSMI</p>
            </div>
          </div>
          <div className={styles.firstFilter}>
            <h3>Select Range ₹{value}</h3>
            <input type="range" min="1000" max="10000" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {data.map((e, index) => (
          <div key={index} className={styles.flightCard}>
            <div className={styles.flightName}>
              <div>logo</div>
              <div>
                <div>{e.airline}</div>
                <div>{e.number}</div>
              </div>
            </div>
            <div className={styles.flighttime}>
              <div>{e.departure}</div>
              <br />
              <div>{e.from}</div>
            </div>
            <div className={styles.totalTime}>
              <div>{e.totalTime}</div>
              <hr />
              <div>non-stop</div>
            </div>
            <div className={styles.flighttime}>
              <div>{e.arrival}</div>
              <br />
              <div>{e.to}</div>
            </div>
            <div className={styles.price}>{e.price}</div>
            <button class={styles.bookNow}>BOOK NOW</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightResult;

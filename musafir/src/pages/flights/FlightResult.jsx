import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FlightResult.module.css";
import { Link } from "react-router-dom";

function FlightResult() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  let dataLS = JSON.parse(localStorage.getItem("dataKey"));
  console.log("dataLS", dataLS);
  const [newData, setNewData] = useState([]);
  // setNewData(dataLS);

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

  const handleSortLH = async (e) => {
    return await axios
      .get(`http://localhost:8080/data?q=${value}&_sort=price&_order=asc`)
      .then((response) => handleSortLHE(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortLHE = (a) => {
    let d = a.filter((e) => {
      return e.from === value && e.to === value1;
    });

    setNewData(d);
    console.log("d", d);
  };

  const handleSortHL = async (e) => {
    return await axios
      .get(`http://localhost:8080/data?q=${value}&_sort=price&_order=desc`)
      .then((response) => handleSortHLE(response.data))
      .catch((err) => console.log(err));
  };

  const handleSortHLE = (a) => {
    let f = a.filter((e) => {
      return e.from === value && e.to === value1;
    });

    setNewData(f);
    console.log("f", f);
  };

  // const handleSearch = async (e) => {
  //   e.preventDefault();

  //   return await axios
  //     .get(`http://localhost:8080/data?q=${value}`)
  //     .then((response) => handleNewSearch(response.data))
  //     .catch((err) => console.log(err));
  // };

  // const handleNewSearch = (a) => {
  //   let c = a.filter((e) => {
  //     return e.from === value && e.to === value1;
  //   });

  //   setNewData(c);
  //   console.log("c", c);
  // };

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
        <input
          type="text"
          className="form-control"
          placeholder="City Nmae"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />

        <button type="submit">Search</button>
      </form> */}

      <div className={styles.left}>
        <div className={styles.filters}>
          <div className={styles.firstFilter}>
            <h3>Sort by price</h3>
            <div className={styles.divi}>
              <input type="checkbox" onChange={handleSortLH} />
              <p>Low to High</p>
            </div>
            <div className={styles.divi}>
              <input type="checkbox" onChange={handleSortHL} />
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
            <h3>Select Range ₹</h3>
            <input type="range" min="1000" max="10000" />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {newData.map((e, index) => (
          <div key={index} className={styles.flightCard}>
            <div className={styles.flightName}>
              <div className={styles.logo}>
                <img
                  src={
                    e.airline === "IndiGo"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                      : e.airline === "AirIndia"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                      : e.airline === "Vistara"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                      : e.airline === "SpiceJet"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                      : e.airline === "GoAir"
                      ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                      : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                  }
                  alt=""
                />
              </div>
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
            <button
              class={styles.bookNow}
              onClick={() => {
                localStorage.setItem("bookData", JSON.stringify(e));
              }}
            >
              <Link to="/bookNow">BOOK NOW</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlightResult;

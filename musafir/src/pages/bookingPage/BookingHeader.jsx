import styled from "styled-components";
import { useState } from "react";
const Bookingheader = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    if (window.scrollY >= 10) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", handleChange);
  return (
    <Bookingheadercss>
      <div className={nav === true ? "jello" : "yello"}>
        <div className="bookingheader">
          <div>
            <h2>Complete your booking</h2>
          </div>
          <div className="bookingleft">
            <p>Flights Summary</p>
            <p>Traveller Details</p>
            <p>Seats Meals</p>
            <p>Add-ons</p>
          </div>
        </div>
      </div>
    </Bookingheadercss>
  );
};

const Bookingheadercss = styled.div`
  .jello {
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: black;
    z-index: 100;
  }
  .bookingheader {
    // background-color: #041422;
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;

    h2 {
      color: white;
      margin-top: 10px;
    }
  }
  .bookingleft {
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-top: 10px;

    p {
      color: white;
      font-size: 13px;
      border-bottom: 1px solid white;
      margin-bottom: 25px;
    }
  }
`;

export default Bookingheader;

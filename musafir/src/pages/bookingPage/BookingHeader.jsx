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
    width: 100%;
    height: 70px;
    background-color: black;
  }
  .bookingheader {
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 150px;
    z-index: 1;
    position: relative;

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

  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    .bookingheader {
      flex-direction: column;
      align-items: center;
      padding-top: 150px;
      padding-bottom: 20px;
      text-align: center;

      h2 {
        font-size: 18px;
      }
    }

    .bookingleft {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      p {
        margin-bottom: 10px;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    /* For tablets: */
    .bookingheader {
      flex-direction: column;
      align-items: center;
      padding-top: 150px;
      padding-bottom: 20px;
      text-align: center;

      h2 {
        font-size: 24px;
      }
    }

    .bookingleft {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      p {
        margin-bottom: 10px;
      }
    }
  }
`;

export default Bookingheader;

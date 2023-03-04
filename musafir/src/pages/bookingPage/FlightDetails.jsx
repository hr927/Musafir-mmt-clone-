import styled from "styled-components";

const FlightDetails = () => {
  let data = localStorage.getItem("bookData");
  let res = JSON.parse(data);
  return (
    <FlightDetailsCSS>
      <div className="flightdetail">
        <div className="flightdetailheader">
          <div>
            <h2>
              {" "}
              {res.from} → {res.to}{" "}
            </h2>
            <p>
              <span className="date">Friday, Dec 10</span>
              <span className="date">Non Stop {res.totalTime}</span>
            </p>
          </div>
          <div></div>
          <div>
            <p className="cancel_fee">Cancellation Fees Apply</p>
            <p className="fare_rules">
              <span>View Fare Rules</span>
            </p>
          </div>
        </div>
        <div className="flightdetail_wrap">
          <div className="flightdetail_internal">
            <div className="icon_div">
              <img
                alt=""
                src={
                  res.airline === "IndiGo"
                    ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                    : res.airline === "Air India"
                    ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/I5.png?v=7"
                    : res.airline === "Vistara"
                    ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/UK.png?v=7"
                    : res.airline === "SpiceJet"
                    ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/SG.png?v=7"
                    : res.airline === "GoAir"
                    ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                    : "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/G8.png?v=7"
                }
              />
              <p>{res.airline}</p>
              <p>{res.number}</p>
            </div>
            <div className="icon_div">
              <p>Economy</p>
              <h4>SAVER</h4>
            </div>
          </div>
          <div id="flight_timer" className="flight_time">
            <div>
              <div className="flight_time">
                <h4>{res.departure}</h4>
                <p></p>
                <h4>{res.from}</h4>
                <p className="over">I</p>
              </div>
              <div className="timeer">
                <p> {res.totalTime}</p>
              </div>
              <div className="flight_time">
                <h4>{res.departure}</h4>
                <p></p>
                <h4>{res.to} </h4>
                <p className="over">CSMI</p>
              </div>
            </div>
            <div className="flight_time">
              <div>
                <p>Baggage</p>
                <h6>ADULT</h6>
              </div>
              <div>
                <p>CheckIn</p>
                <h6>15 Kgs</h6>
              </div>
              <div>
                <p>Cabin</p>
                <h6>7 Kgs</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FlightDetailsCSS>
  );
};

const FlightDetailsCSS = styled.div`
  .flightdetail {
    width: 86%;
    border-radius: 8px;
    height: 235px;
    margin: 20px;
    padding: 12px 0;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    /* border:1px solid #e9e9e9; */
    background-color: #fff;
    /* position: relative; */
    padding: 2%;
  }

  .flightdetailheader {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -30px;
  }
  .date {
    background-color: rgb(255, 237, 209);
    margin-right: 5px;
    position: relative;
    top: -10px;
  }
  .fare_rules {
    color: #0091ff;
    cursor: pointer;
    position: relative;
    left: 15px;
  }
  .cancel_fee {
    background-color: rgb(45, 193, 140);
    color: white;
    padding: 3px;
    font-size: 13px;
  }
  .flightdetail_internal {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -60px;
    /* margin-bottom: 10px; */
  }
  .icon_div {
    display: flex;
    gap: 10px;
    padding-left: 10px;
    padding-right: 10px;
    flex-direction: row;
    align-items: center;

    img {
      width: 10%;
    }
    h4 {
      color: rgb(36, 153, 149);
    }
  }
  .flight_time {
    display: flex;
    flex-direction: row;
    line-height: 0px;
    gap: 10px;
    padding: 2%;
    align-items: center;

    div {
      width: 100%;
    }
  }
  #flight_timer {
    background-color: #f4f4f4;
    height: 100px;
    position: relative;
    top: -65px;
  }
  @media only screen and (max-width: 767px) {
    .flightdetail {
      height: auto;
      margin: 10px;
      padding: 5px;
    }

    .flightdetailheader {
      top: -15px;
      flex-direction: column;
    }

    .date {
      margin-right: 0;
      margin-bottom: 5px;
      top: 0;
    }

    .fare_rules {
      left: 0;
      margin-top: 5px;
    }

    .cancel_fee {
      font-size: 11px;
    }

    .flightdetail_internal {
      top: -30px;
      flex-direction: column;
    }

    .icon_div {
      gap: 5px;
      padding-left: 0;
      padding-right: 0;

      img {
        width: 20%;
      }
    }

    .flight_time {
      flex-direction: column;
      gap: 5px;
      padding: 2% 0;
    }

    #flight_timer {
      height: auto;
      top: -30px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .flightdetail {
      height: auto;
      margin: 10px;
      padding: 5px;
    }

    .flightdetailheader {
      top: -15px;
      flex-direction: column;
    }

    .date {
      margin-right: 0;
      margin-bottom: 5px;
      top: 0;
    }

    .fare_rules {
      left: 0;
      margin-top: 5px;
    }

    .cancel_fee {
      font-size: 11px;
    }

    .flightdetail_internal {
      top: -30px;
      flex-direction: column;
    }

    .icon_div {
      gap: 5px;
      padding-left: 0;
      padding-right: 0;

      img {
        width: 20%;
      }
    }

    .flight_time {
      flex-direction: column;
      gap: 5px;
      padding: 2% 0;
    }

    #flight_timer {
      height: auto;
      top: -30px;
    }
  }
`;

export default FlightDetails;

import styled from "styled-components";

const CancelDetails = () => {
  let data = localStorage.getItem("bookData");
  let res = JSON.parse(data);
  return (
    <CancelDetailsCSS>
      <div className="cancel">
        <div className="cancel_header">
          <h4>Cancellation Refund Policy</h4>
          <p>View Policy</p>
        </div>
        <div className="icon_div">
          <img
            alt=""
            src={
              res.airline === "IndiGo"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/6E.png?v=7"
                : res.airline === "Air India"
                ? "https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/AI.png?v=7"
                : res.airline === "AirAsia"
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
          <h4>
            {res.from}-{res.to}
          </h4>
        </div>
        <div className="penalty">
          <div className="penalty_rs">
            <p>Cancellation Penalty :</p>
            <h5>₹ 3,300</h5>
            <h5>₹ 3,800</h5>
            <h5>₹ 4,000</h5>
          </div>
          <div className="penalty_line">
            <p className="cancGradline"></p>
          </div>
          <div className="penalty_date">
            <p>Cancel Between (IST) :</p>
            <h6>Now</h6>
            <h6>
              7 Dec <p>10.45</p>
            </h6>
            <h6>
              10 Dec <p>8.45</p>
            </h6>
            <h6>
              10 Dec <p>10.45</p>
            </h6>
          </div>
        </div>
        <div className="cancel_footer2">
          <div className="cancel_footer_left">
            <img
              className="rs_icon"
              alt=""
              src="https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/fare-upgrade.png"
            />
            <p>
              More fares with flexible refund & date change policy available!
            </p>
          </div>
          <p className="upgrade">UPGRADE</p>
        </div>
      </div>
    </CancelDetailsCSS>
  );
};

export const CancelDetailsCSS = styled.div`
  .cancel {
    width: 86%;
    margin: 20px;
    padding: 2%;
    border-radius: 2px;
    box-shadow: 0px 0px 5px #797878;
    border-radius: 8px;
    background-color: #fff5ff;
    height: 250px;
  }
  .cancel_header {
    display: flex;
    position: relative;
    top: -20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  .icon_div {
    display: flex;
    gap: 10px;
    position: relative;
    top: -30px;
    flex-direction: row;

    img {
      width: 25px;
      height: 25px;
    }
    h4 {
      margin: 0px;
    }
  }
  .penalty_rs {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -35px;
  }
  .penalty_date {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    position: relative;
    top: -55px;
  }

  .cancGradline {
    background-image: linear-gradient(
      to right,
      rgb(1, 149, 60),
      rgb(131, 180, 48),
      rgb(214, 158, 21),
      rgb(250, 93, 93)
    );
    height: 6px;
    margin: 0% 0% 0% 25%;
    border-radius: 12px;
    position: relative;
    top: -45px;
  }
  .cancel_footer {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-direction: row;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
    background-color: #ddfffe;
    padding-left: 10px;
    padding-right: 20px;
    height: 60px;
    align-items: center;
    border-radius: 8px;

    p {
      margin-top: 10px;
    }
  }
  .cancel_footer2 {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    border-radius: 8px;
    position: relative;
    top: -65px;
    flex-direction: row;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 15%);
    background-color: #ddfffe;
    padding: 5px 10px;

    p {
      margin-top: 10px;
    }
  }
  .upgrade {
    color: #0091ff;
  }
  .cancel_footer_left {
    display: flex;
    gap: 10px;
    flex-direction: row;
  }
  .rs_icon {
    margin-top: 8px;
    width: 27px;
    height: 27px;
  }
  .luggagebar {
    width: 90%;
    margin: 0px;
    padding: 0px 0px 0px 20px;
  }
  @media (max-width: 768px) {
    .cancel {
      height: auto;
    }
    .icon_div {
      flex-direction: column;
      align-items: center;
    }
    .penalty_rs,
    .penalty_date {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .cancGradline {
      margin: 0% 0% 0% 10%;
    }
    .cancel_footer {
      display: none;
    }
    .cancel_footer2 {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: -40px;
    }
  }

  @media (max-width: 576px) {
    .cancel {
      margin: 10px;
      padding: 10px;
    }
    .icon_div {
      top: -15px;
    }
    .penalty_rs,
    .penalty_date {
      top: -25px;
    }
    .cancGradline {
      margin: 0% 0% 0% 5%;
      top: -25px;
    }
    .cancel_footer2 {
      top: -20px;
    }
  }
`;

export default CancelDetails;

import FlightDetails from "./FlightDetails";
// import { Flightdetailfooter } from "./Flightdetailfooter";
import LuggageBar from "./LuggageBar";
import styled from "styled-components";
import CancelDetails from "./CancelDetails";
import TravellerDetails from "./TravellerDetails";
import PaymentBar from "./PaymentBar";
import BookingDetailsSend from "./BookingDetailsSend";
import BookNowButton from "./BookNowButton";

const BookNow = () => {
  return (
    <div className="final">
      <div className="detail">
        <FlightDetails />
        <LuggageBar />
        <CancelDetails />
        <TravellerDetails />
        <BookingDetailsSend />
        <BookNowButton />
        {/* <Flightdetailfooter /> */}
      </div>
      <div className="pay_detail">
        <PaymentBar />
      </div>
    </div>
  );
};

export const Getdatacss = styled.div`
  .main_div {
    background-image: linear-gradient(
      0deg,
      #b9c4d1,
      #b9c4d1,
      #b9c4d1,
      #b9c4d1,
      #b9c4d1,
      #051423
    );
    width: 100%;
    position: absolute;
    top: 70px;
    left: 0;
    /* height: 250px; */
  }

  .final {
    display: flex;
    flex-direction: row;
    gap: 0px;
  }
  .detail {
    margin-right: 0px;
    padding-left: 30px;
    width: 75%;
  }
  .pay_detail {
    width: 30%;
    // border: 1px solid black;
    margin: 10px 50px 10px 0px;
    padding: 10px;
  }
`;

export default BookNow;

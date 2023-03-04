import styled from "styled-components";
import Bookingheader from "./BookingHeader";
import BookNow from "./BookNow";

const GetBookData = () => {
  return (
    <div>
      <Getdatacss>
        <div className="main_div">
          <Bookingheader />
          <BookNow />
        </div>
      </Getdatacss>
    </div>
  );
};

const Getdatacss = styled.div`
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
    // position: absolute;
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
  @media (max-width: 768px) {
    .detail {
      padding-left: 10px;
      width: 60%;
    }
    .pay_detail {
      width: 40%;
      margin-right: 0px;
      margin-left: 10px;
    }
  }

  @media (max-width: 480px) {
    .final {
      flex-direction: column;
    }
    .detail {
      padding-left: 10px;
      width: 100%;
    }
    .pay_detail {
      width: 100%;
      margin-right: 0px;
      margin-left: 0px;
    }
  }
`;

export default GetBookData;

import styled from "styled-components";

const BookingDetailsSend = () => {
  return (
    <Style>
      <h2>Booking details will be send to</h2>
      <div className="outer">
        <h4>Your ticked and flight information will be sent here.</h4>
        <div id="main">
          <div className="input">
            <div>
              <p>Country Code</p>
              <select name="" id="">
                <option value="in">(+91)India</option>
              </select>
            </div>
            <div>
              <p>Moblie No</p>
              <input type="text" required="true" placeholder="Mobile No" />
            </div>
            <div>
              <p>Email</p>
              <input type="text" required="true" placeholder="Email" />
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
};
const Style = styled.div`
  width: 86%;
  margin-left: 20px;

  #main {
    padding: 2%;
    width: 90%;
    border-radius: 8px;
    background-color: white;
    margin: auto;

    .input {
      display: flex;
      justify-content: space-between;
      line-height: 5px;

      input {
        padding: 3%;
        width: 180px;
        height: 27px;
        border-radius: 7px;
      }

      select {
        width: 180px;
        padding: 3%;
        border-radius: 7px;
        height: 40px;
      }
    }
  }

  .outer {
    box-shadow: 0px 0px 3px gray;
    padding: 2%;
    width: 100%;
    border-radius: 8px;
    background-color: white;
  }

  /* Media queries for tablet screens */
  @media (max-width: 828px) {
    #main {
      .input {
        flex-direction: column;

        input,
        select {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    }

    .outer {
      padding: 10px;
    }
  }

  /* Media queries for mobile screens */
  @media (max-width: 480px) {
    #main {
      .input {
        flex-direction: column;

        input,
        select {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    }

    .outer {
      padding: 10px;
    }
  }
`;

export default BookingDetailsSend;

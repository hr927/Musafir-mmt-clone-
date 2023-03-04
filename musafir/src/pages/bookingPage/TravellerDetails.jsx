import styled from "styled-components";

const TravellerDetails = () => {
  return (
    <div>
      <Style>
        <div className="div1">
          <div className="heading">
            <h3>ADULT</h3>
            <h4>1/1 selected</h4>
          </div>
          <div className="adultform">
            <h5>
              IMPORTANT: Enter your name as it is mentioned in your passport or
              any government approved ID.
            </h5>
            <div>
              <div className="form">
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Last name" />
              </div>
              <div className="gender">
                <button>MALE</button>
                <button>FEMALE</button>
              </div>
            </div>
          </div>
          <button className="add">+ ADD ADULT</button>
        </div>
      </Style>
    </div>
  );
};

const Style = styled.div`
  display: grid;
  grid-template-columns: 61.5% 26%;
  width: 1255px;
  margin-left: -48px;

  .div1 {
    height: 270px;
    width: 100%;
    padding: 2%;
    border-radius: 8px;
    margin-left: 70px;
    box-shadow: 0px 0px 3px gray;
    background-color: white;
    .heading {
      box-shadow: 0px 0px 2px gray;
      border-radius: 8px;
      display: flex;
      padding: 2%;
      justify-content: space-between;
      width: 95%;
      height: 30px;
      align-items: center;
      margin: auto;
      h4 {
        color: green;
        font-weight: 500;
      }
    }
    .adultform {
      height: 120px;
      width: 95%;
      border-radius: 8px;
      margin: auto;
      box-shadow: 0px 1px 2px gray;
      padding: 2%;
    }
    .adultform div {
      display: flex;
      justify-content: space-between;
      .form {
        height: 40px;
        width: 300px;
        gap: 10px;
        input {
          padding: 2%;
        }
      }
    }
    .gender {
      button {
        width: 130px;
        background-color: white;
        gap: 2px;
        border-radius: 8px;

        border: 1px solid gray;
        cursor: pointer;
      }
    }
    .add {
      border: none;
      background-color: white;
      color: #0084ff;
      font-weight: 600;
      font-size: 18px;
      position: relative;
      cursor: pointer;
      top: 30px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .div1 {
      margin-left: 0;
      width: 90%;
      padding: 5%;
    }
    .heading {
      width: 100%;
      margin-left: 0;
    }
    .adultform {
      width: 100%;
      margin-left: 0;
    }
    .form {
      width: 45%;
      margin-right: 5%;
    }
  }

  @media only screen and (max-width: 768px) {
    .div1 {
      margin-left: 0;
      width: 90%;
      padding: 5%;
    }
    .heading {
      width: 100%;
      margin-left: 0;
    }
    .adultform {
      width: 100%;
      margin-left: 0;
    }
    .form {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
    .gender {
      button {
        width: 45%;
      }
    }
  }
`;

export default TravellerDetails;

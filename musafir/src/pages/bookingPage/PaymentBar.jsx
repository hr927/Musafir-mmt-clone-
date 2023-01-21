import styled from "styled-components";

const PaymentBar = () => {
  let data = localStorage.getItem("bookData");
  let res = JSON.parse(data);

  return (
    <PaymentBarCSS>
      <div className="paybar">
        <div className="payment_rs">
          <h3>Fare Summary</h3>
          <div className="inline">
            <h5>Base Fare</h5>
            <p>{+res.price}</p>
          </div>
          <div className="inline">
            <h5>Fee & Surcharges</h5>
            <p> ₹ 745</p>
          </div>
          <div className="inline">
            <h5>Other Services</h5>
            <p> ₹ 10</p>
          </div>
          <div className="inline">
            <h5>Discounts</h5>
            <p>- ₹ 500</p>
          </div>
          <div className="inline">
            <h3>Total Amount</h3>
            <h3>{+res.price + 745 + 10 - 500}</h3>
          </div>
        </div>
        <div className="promocode">
          <div className="promo_icon">
            <h3>PROMO CODES</h3>
            <img
              alt=""
              src="https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/promo-code.png"
            />
          </div>
          <input
            className="code_input"
            type="text"
            placeholder="Enter Promo Code Here"
          ></input>
          <div className="promo_option">
            <h5>MMTSTANC</h5>
            <p>Use & Save ₹ 480</p>
            <p>
              Congratulations! Promo Discount of Rs. 480 applied successfully.
              Now pay only using your Standard Chartered Bank Card to get this
              discount.
            </p>
            <p className="terms_remove">Terms & Condition</p>
            <p className="terms_remove">REMOVE</p>
          </div>
          <div className="promo_option">
            <h5>MMTZEST</h5>
            <p>Use & Save ₹ 400</p>
            <p>
              Congratulations! Promo Discount of Rs. 400 applied successfully..
            </p>
            <p className="terms_remove">Terms & Condition</p>
            <p className="terms_remove">REMOVE</p>
          </div>
        </div>
      </div>
    </PaymentBarCSS>
  );
};

const PaymentBarCSS = styled.div`
  .payment_rs {
    padding: 4%;
    border-radius: 8px;
    box-shadow: 0px 0px 4px gray;
    background-color: #fff;
  }
  .inline {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    h3 {
      margin-bottom: 7px;
      padding-bottom: 5px;
    }
    h5 {
      margin-top: 18px;
      line-height: 20px;
      margin-bottom: 0px;
      font-size: 14px;
    }
    p {
      margin-top: 16px;
      margin-bottom: 1px;
    }
  }
  .promo_icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0px;
    padding: 2%;
    border-radius: 8px;
    background-image: linear-gradient(
      to top,
      rgb(237, 210, 135),
      rgb(184, 134, 11)
    );
    img {
      width: 40px;
      height: 30px;
      margin-top: 10px;
    }
    h3 {
      margin-left: 10px;
      color: white;
    }
  }
  .code_input {
    width: 97%;
    height: 40px;
    font-size: 17px;
    padding: 5px;
  }
  .promo_option {
    background-color: #f4f4f4;
    margin-top: 20px;
    padding: 12px 10px;
    border-radius: 8px;
    box-shadow: 0 1px 4px 0 rgb(0 0 0 / 21%);
    border: 1px solid #e9e9e9;
  }
  .terms_remove {
    color: rgb(0, 140, 255);
  }
`;

export default PaymentBar;

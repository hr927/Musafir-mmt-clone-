import styled from "styled-components";
import React from "react";

const Style = styled.div`
  button {
    margin: 20px;
    cursor: pointer;
    width: 230px;
    height: 35px;
    border-radius: 25px;
    background: linear-gradient(
      to right,
      #8f92fa 0%,
      #6165f0 50%,
      #6c70eb 50%,
      #3339e9 100%
    );
    border: none;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
`;

const BookNowButton = () => {
  return (
    <Style>
      <button type="button">CONTINUE</button>
    </Style>
  );
};

export default BookNowButton;

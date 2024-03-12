import React from "react";
import "./tempbutton.css";

const BuyButton = ({ buttonText, onClick }) => {
  return (
    <button className="buybutton" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default BuyButton;

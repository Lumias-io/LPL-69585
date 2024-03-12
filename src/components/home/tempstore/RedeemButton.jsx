import React from "react";
import "./tempbutton.css";

const RedeemButton = ({ buttonText, onClick }) => {
  return (
    <button className="redeembutton" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default RedeemButton;

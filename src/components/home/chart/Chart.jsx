import React from "react";
import "./chart.css";
import Coming from "../comingsoon/Coming";

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart-header">
        <h1>
          Are you ready for a new <br /> adventure?
        </h1>
        <p>
          You are now able to convert USD to LUM, currency used for in-game
          purchaces, APY earning
        </p>
      </div>
      <Coming />
      <div className="chart-container">
        <p1>Convert</p1>
        <p2>Earn interest</p2>
      </div>
    </div>
  );
};

export default Chart;

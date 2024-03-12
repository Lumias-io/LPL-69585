import React from "react";
import "./trending.css";
import {
  pool_deep,
  pool_magical,
  pool_nemesis,
  pool_survivor,
} from "./imports";
import Coming from "../comingsoon/Coming";

const Trend = () => {
  return (
    <div className="trend">
      <div className="trend-header">
        <h1>Trending Games</h1>
        <button type="">Explore</button>
      </div>
      <div className="trend-container">
        <div>
          <img src={pool_nemesis} alt="pool_nemesis" draggable="false" />
          <p>Nemesis</p>
          <p2>13.2% APY</p2>
        </div>
        <div>
          <img src={pool_deep} alt="pool_deep" draggable="false" />
          <p>Deep Pool</p>
          <p2>19% APY</p2>
        </div>
        <div>
          <img src={pool_survivor} alt="pool_survivor" draggable="false" />
          <p>Survivor's</p>
          <p2>8% APY</p2>
        </div>
        <div>
          <img src={pool_magical} alt="pool_magical" draggable="false" />
          <p>Magical Lake</p>
          <p2>11.2% APY</p2>
        </div>
      </div>
      <Coming />
    </div>
  );
};

export default Trend;

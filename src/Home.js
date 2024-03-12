import React from "react";
import "./App.css";
import { Header, Popular, Updates, Chart, Trending } from "./components";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Popular />
      <Updates />
      <Chart />
      <Trending />
    </div>
  );
};

export default Home;

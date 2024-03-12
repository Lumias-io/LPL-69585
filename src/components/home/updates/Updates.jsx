import React from "react";
import "./updates.css";
import bluemoontwo from "../../../assets/bluemoontwo.svg";
import MediumArticles from "./MediumArticles";
import MediumCard from "./MediumCard";

const Updates = () => {
  const link = () => {
    //using this wont be slow for the user, but if there is a lot of things to load, then it might slow down
    window.location.href = "/news";
  };
  return (
    <div className="updates">
      <div className="updates-header">
        <h1>Updates!</h1>
        <button onClick={link}>Explore</button>
      </div>
      <p>Stay up to date on the latest news</p>
      <div className="updates-container">
        <MediumArticles limit={2} className="updates-medium-articles" />
      </div>
      <div className="updates-bluemoon">
        {/* <img src={bluemoon} alt="blue moon" draggable="false" /> */}
        <img src={bluemoontwo} alt="blue moon" draggable="false" />
      </div>
    </div>
  );
};

export default Updates;

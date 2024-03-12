import React from "react";
import "./popular.css";
import football_frenzy from "../../../assets/popimages/football_frenzy.png";
import FF from "../../../assets/popimages/FF_4.1.zip";

const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-header">
        <h1>
          The first in house Lumias
          <br /> game is now live
        </h1>
        <a href={FF + "?v=4.1"} download="FF_4.1.zip">
          <button>Download</button>
        </a>
      </div>
      <hr className="popular-hr" />
      <div className="popular-container">
        <div>
          <p>Can't wait? Download Football Frenzy now!</p>
        </div>
        <div className="popular-container-image">
          <img src={football_frenzy} alt="Football Frenzy" />
        </div>
      </div>
    </div>
  );
};

export default Popular;

import React from "react";
import "./header.css";
import defi_planet from "../../../assets/header/defi_planet.svg";
import defi_ast from "../../../assets/header/defi_ast.svg";
import defi_moon from "../../../assets/header/defi_moon.svg";
import gamefi_planetfull from "../../../assets/header/gamefi_planetfull.svg";
// import gamefi_planet from "../../../assets/header/gamefi_planet.svg";
import gamefi_moon from "../../../assets/header/gamefi_moon.svg";
// import gamefi_rocket from "../../../assets/header/gamefi_rocket.svg";
// import gamefi_ufo from "../../../assets/header/gamefi_ufo.svg";
import galaxydust from "../../../assets/header/galaxydust.svg";
import aststring from "../../../assets/header/aststring.svg";
// import galaxydust2 from "../../../assets/galaxydust2.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={galaxydust} alt="galaxy" className="galaxydust" />
        <div className="header-image-defi">
          <img
            src={defi_planet}
            alt="defi planet"
            height="600"
            width="600"
            className="defi-planet"
            draggable="false"
          />
          <img
            src={defi_moon}
            alt="defi moon"
            height="200"
            width="300"
            className="defimoon"
            draggable="false"
          />
          <img
            src={defi_ast}
            alt="asteroids"
            height="300"
            width="300"
            className="ast"
            draggable="false"
          />
        </div>
        <div className="header-image-gamefi">
          <a href="/gaming">
            <img
              src={gamefi_planetfull}
              alt="gamefi planet"
              height="500"
              width="500"
              className="gamefi-planet"
            />
          </a>
          <img
            src={gamefi_moon}
            alt="gamefi moon"
            height="100"
            width="100"
            className="gamefi-moon"
            draggable="false"
          />
          <img
            src={aststring}
            alt="asteroid tail"
            height="500"
            width="500"
            className="aststring"
            draggable="false"
          />
          {/* <img
            src={gamefi_rocket}
            alt="gamefi rocket"
            height="100"
            width="100"
            className="gamefi-rocket"
          />
          <img
            src={gamefi_ufo}
            alt="gamefi ufo"
            height="250"
            width="250"
            className="gamefi-ufo"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;

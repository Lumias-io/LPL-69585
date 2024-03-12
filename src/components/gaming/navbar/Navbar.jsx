import React from "react";
import "./navbar.css";
// import { useState } from "react";
import mainlogo32x32 from "../../../assets/mainlogo32x32.png";
import title from "../../../assets/title.svg";

const MenuItems = () => (
  <ul>
    <li>
      <a href="/swap">Swap</a>
      <span className="span-comingsoon">soon</span>
    </li>
    <li>
      <a href="/gaming">Gaming</a>
    </li>
    <li>
      <a href="/trade">Trade</a>
      <span className="span-comingsoon">soon</span>
    </li>
    <li>
      <a href="/friends">Friends</a>
      <span className="span-comingsoon">soon</span>
    </li>
    <li>
      <a href="/library">Library</a>
      <span className="span-comingsoon">soon</span>
    </li>
    <li>
      <a href="/store">Store</a>
    </li>
    <li>
      <a href="/connections">Connections</a>
      <span className="span-comingsoon">soon</span>
    </li>
    <li>
      <a href="/settings">Settings</a>
      <span className="span-comingsoon">soon</span>
    </li>
  </ul>
);

const GamingNavBar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
      <div className="navbar-title-container">
        <img src={title} alt="title" />
      </div>
      <div className="navbar-menuitems">
        <MenuItems />
      </div>
      {/* <div className="navbar-ending">
        <span className="sub-text">Privacy Policy</span>
        <br></br>
        <span className="sub-text">Terms and conditions</span>
      </div> */}
    </nav>
  );
};

export default GamingNavBar;

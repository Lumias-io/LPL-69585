import React from "react";
import {
  Navbar,
  About,
  Docs,
  News,
  Footer,
  GamingLandingPage,
  Swap,
  Store,
  Settings,
  Library,
  Trade,
  Friends,
  Connections,
  TempStore,
  GamingNavBar,
} from "./components";
import "./App.css";
import "./fonts/PoppinsMedium.ttf";
import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'; // Import the icons
import Home from "./Home";
import FriendsList from "./components/gaming/friends-list/friends-list.jsx";
import VoiceChannel from "./components/gaming/voice-channel/voice-channel.jsx";
import Gameingheader from "./components/gaming/gamingheader/Gamingheader.jsx";
import AllGamesPage from "./components/pages/gamingpages/AllGames";
import ViewGamePage from "./components/pages/gamingpages/ViewGame";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let component;
  let inGamingApp = false;
  let shouldShowHeader = false;

  switch (window.location.pathname) {
    // case "/store":
    //   component = <TempStore />;
    //   break;
    case "/":
      component = <Home />;
      break;
    case "/news":
      component = <News />;
      break;
    case "/docs":
      component = <Docs />;
      break;
    case "/about":
      component = <About />;
      break;
    // below is for gaminghub
    case "/swap":
      component = <Swap />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/gaming":
      component = <AllGamesPage />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/game":
      component = <ViewGamePage />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/trade":
      component = <Trade />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/friends":
      component = <Friends />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/library":
      component = <Library />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/store":
      component = <TempStore />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/connections":
      component = <Connections />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;
    case "/settings":
      component = <Settings />;
      inGamingApp = true;
      shouldShowHeader = true;
      break;

    default:
    //do nothing
  }

  const [isMenuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  if (inGamingApp) {
    return (
      <div className="gaming-container">
        {isMenuOpen && <GamingNavBar />}
        <div className="gaming-container-body">
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <RiCloseLine color="#fff" size={23} />
          ) : (
            <RiMenu3Line color="#fff" size={23} />
          )}
        </div>
          <div>{shouldShowHeader && <Gameingheader />}</div>
          <div className="row">
            <div className="col gaming-container-content">{component}</div>
            {/* <div className="col socials-container">
              <FriendsList />
              <VoiceChannel />
            </div> */}
          </div>
        </div>
        <ToastContainer position='bottom-right' />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="background">
        <Navbar />
        {component}
      </div>
      <div className="footer-bg">
        <Footer />
      </div>
      <ToastContainer position='bottom-right' />
    </div>
  );
  // }
}

export default App;

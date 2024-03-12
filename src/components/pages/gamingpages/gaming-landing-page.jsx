import React from "react";
import "./gaming-landing-page.css";
import LoversNightmareLogo from "../../../assets/landingpage/loversnightmare.jpeg";
import StarHunterLogo from "../../../assets/landingpage/starhunter.png";
import SurvivorLogo from "../../../assets/landingpage/survivor.jpeg";
import planetDiscoverer3Logo from "../../../assets/landingpage/planetDiscoverer3.png";
import TrendingShowcase from "../../gaming/trending-showcase/trending-showcase.jsx";
import RecentlyPlayedTile from "../../gaming/recently-played-tile/recently-played-tile.jsx";
import FriendsList from "../../gaming/friends-list/friends-list.jsx";
import VoiceChannel from "../../gaming/voice-channel/voice-channel";

const GamingLandingPage = () => {
  return (
    <div className="landing-page-container">
      <TrendingShowcase
        imagePath={planetDiscoverer3Logo}
        title="Planet discoverer 3 is now here!"
        description="Do you want to discover at the stars in the universe? Makes can maybe s how you the way!"
      />
      {/* <div className="recently-played-container">
        <h2>
          LIBRARY <span className="sub-text">(recently played)</span>
        </h2>
        <div className="recently-played-slider row">
          <RecentlyPlayedTile
            imagePath={LoversNightmareLogo}
            title="Lover's Nightmare"
            timePlayed="20 hours played"
          />
          <RecentlyPlayedTile
            imagePath={StarHunterLogo}
            title="Star Hunter"
            timePlayed="25 hours played"
          />
          <RecentlyPlayedTile
            imagePath={SurvivorLogo}
            title="Survivor"
            timePlayed="82 hours played"
          />
        </div>
      </div>
      <div className="quick-access-container">
        <h2>Quick Access</h2>
      </div> */}
    </div>
  );
};

export default GamingLandingPage;

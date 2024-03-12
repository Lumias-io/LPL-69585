import React from "react";
import "./about.css";
import planetredbig from "../../assets/planetredbig.svg";
import planetbluebig from "../../assets/planetbluebig.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>Lumias Team</h1>
        <p>We are the Lumias Team</p>
      </div>
      <div className="about-images">
        <img
          src={planetbluebig}
          height="800"
          width="800"
          alt="blue planet left"
          className="blue"
        />
        <img
          src={planetredbig}
          height="800"
          width="800"
          alt="red planet right"
          className="red"
        />
      </div>
      <div className="about-details">
        <h1>Mission</h1>
        <p>
          Our goal is to build a platform that allows developers to focus on
          building their games, while offering the best possible experience for
          their users. Our main focus is on quality, community, and user
          satisfaction.
        </p>
        <h1>Why Lumias</h1>
        <p>
          We want to help you create your brand and we have a passion for
          excellence. That is our way of saying that we understand what new
          projects need. We are always listening to our community, improving the
          way we function and the suite of products we offer. This project is
          our way of saying that we understand what new projects need versus
          what we think they should want – meaning less friction and more ease
          when it comes to your success. We work hard to ensure that our team
          members and partners are in sync with each other. That's why we are
          proud to say we have all the necessary skills. We listen, we observe
          and we act. Our dedication to your project is not just about offering
          ideas and advice, it's about building a partnership that lasts for
          years, helping you grow into something more than what you were before.
        </p>
      </div>
      <div className="about-roadmap">
        <p>Developers</p>
        <hr className="about-roadmap-hr" />
        <p>Lumias</p>
        <hr className="about-roadmap-hr" />
        <p>Marketplace</p>
      </div>
      <div className="about-description">
        <h1>Description</h1>
        <p>
          We’re dedicated to keeping Lumias a great platform for you and your
          friends who love games. That’s why we work hard to improve the
          experience for gamers and developers, bringing new features to the
          community and improving communication with developers. To read more
          about our team, be sure to check out the Whitepaper!
        </p>
      </div>
    </div>
  );
};

export default About;

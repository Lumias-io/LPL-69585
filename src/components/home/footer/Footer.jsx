import React from "react";
import "./footer.css";
import asteroidfooter from "../../../assets/asteroidfooter.svg";
import title from "../../../assets/title.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-info-container">
          <ul>
            General
            <a href="/home">Home</a>
            <a href="/about">About Us</a>
            {/* <a
            href="https://lumias-research-labs.gitbook.io/lumias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            href="https://lumias.medium.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            News
          </a> */}
          </ul>
          {/* keep commented until the papers are ready */}
          {/* <ul>
          Legal
          <a href="blank">Privacy Policy</a>
          <a href="blank">Terms and Conditions</a>
          <a href="blank">Cookies</a>
        </ul> */}
          <ul>
            Information
            <a
              href="https://lumias-research-labs.gitbook.io/lumias/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <a
              href="https://lumias.medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              News
            </a>
          </ul>
          <ul>
            Get in touch
            <a
              href="https://cryptpad.fr/form/#/2/form/view/q-6RZPZXlWsscmCbs9oh6NCkbHnZZ5Aiw0ej4ncbFAQ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a href="blank">Email</a>
            <a
              href="https://discord.gg/qSWCtUrxwd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </ul>
        </div>
        <div className="footer-end">
          <img src={title} alt="title" height="130" width="130" />
          <p>All rights reserved, Lumias © 2024</p>
        </div>
      </div>
      <div className="vr"></div>
      <div className="footer-newsletter">
        <h1>Newsletter!</h1>
        <p>
          Be the first one to enjoy our news, all the latest updates <br /> of
          our platforms and not miss any deals
        </p>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Address"
        />
        <button type="button">Submit!</button>
        <div className="footer-newsletter-container">
          <div className="footer-newsletter-container-asteroid">
            <img
              src={asteroidfooter}
              height="190"
              width="190"
              alt="asteroidfooter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

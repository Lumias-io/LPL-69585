import React from "react";
import "./docs.css";
import planetredbig from "../../assets/planetredbig.svg";
import planetbluebig from "../../assets/planetbluebig.svg";
import { RiFile2Fill } from "react-icons/ri";

const Docs = () => {
  return (
    <div className="docs">
      <div className="docs-header">
        <h1>Documentation</h1>
        <p>All the documentation right here</p>
      </div>
      <div className="docs-images">
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
      <div className="docs-details">
        <h1>Whitepaper</h1>
        <p>You can download whitepaper directly</p>
        <button className="docs-details-whitepaper">
          <RiFile2Fill className="file" />
          <a
            href="https://lumias-research-labs.gitbook.io/lumias/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </a>
        </button>
        <h1>Litepaper</h1>
        <p>You can download litepaper directly</p>
        <button className="docs-details-litepaper">
          <RiFile2Fill className="file" />
          <a
            href="https://lumias-research-labs.gitbook.io/lumias/lumias-app/features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Litepaper
          </a>
        </button>
      </div>
      {/* <div className="docs-legal">
        <h1>Legal</h1>
        <p>You can download legal directly</p>
      </div> */}
      <div className="docs-description">
        <h1>Description</h1>
        <p>
          The first step to knowing if a project is right for you is taking the
          time to read what we have to say. Everything you need to know about
          our company, our team and the services we offer are available in these
          links. If you have any questions or just want more details then please
          contact us and we will be happy to chat about your project!
        </p>
      </div>
    </div>
  );
};

export default Docs;

import React from "react";
import "./mediumcard.css";

const MediumCard = ({ article }) => {
  const formattedDate = new Date(article.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const extractImageUrl = (description) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(description, "text/html");
    const imageElement = htmlDoc.querySelector("img");

    return imageElement ? imageElement.src : ""; // Return image URL if found, otherwise ''
  };

  const thumbnailUrl =
    article.thumbnail || extractImageUrl(article.description);

  return (
    <div className="mediumcard">
      <a href={article.link}>
        <img
          className="mediumcard-thumbnail"
          src={thumbnailUrl}
          alt={article.title}
        />
        <div className="mediumcard-body">
          <h2 className="mediumcard-title">{article.title}</h2>
          <p className="mediumcard-subtitle">{formattedDate}</p>
        </div>
      </a>
    </div>
  );
};

export default MediumCard;

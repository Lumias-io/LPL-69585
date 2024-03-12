import React, { useState, useEffect } from "react";
import MediumCard from "./MediumCard.jsx";
import "./mediumarticles.css";

const MediumArticles = ({ limit, className }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lumias`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setArticles(data.items))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //If 'limit' prop is not provided, display all articles
  const latestArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <div className={`article-list ${className}`}>
      {latestArticles.map((article, index) => (
        <div key={index} className="medium-card-container">
          <MediumCard article={article} />
        </div>
      ))}
    </div>
  );
};

export default MediumArticles;

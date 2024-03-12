import React from "react";
import "./news.css";
import newslaunch from "../../assets/news/newslaunch.png";
import MediumArticles from "../home/updates/MediumArticles.jsx";

const News = () => {
  return (
    <div className="news">
      <div className="news-header">
        <img src={newslaunch} alt="newswhitepaper" />
        <h1>Collection of Lumias articles!</h1>
      </div>
      <div className="news-latest">
        <h1>Latest News</h1>
        <p>Stay up to date on the latest news</p>
        <div className="news-latest-container">
          <MediumArticles className="news-medium-articles" />
        </div>
      </div>
    </div>
  );
};

export default News;

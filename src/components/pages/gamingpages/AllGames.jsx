import React, { useEffect } from "react";
import "./AllGames.css";
import GameTile from "../../gaming/game-tile/game-tile";
import TrendingShowcase from "../../gaming/trending-showcase/trending-showcase";


const AllGamesPage = () => {
  const [games, setGames] = React.useState([{
    title: "",
    thumbnailpath: "",
    trailerpath: "",
    abouttext: "",
    developertext: "",
    tokenomicspath: "",
    hasnfts: false,
    isfreetoplay: false
  }]);

  // const urlParams = new URLSearchParams(window.location.search);
  // const [search] = React.useState(urlParams.get('search'));

  const getGames = () => {
    fetch('https://www.lumias.io/api/game/all')
      .then((res) => res.json())
      .then((data) => {
        console.log("got games", data);
        setGames(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    getGames();
  }, []);

  const renderGames = () => {
    const renderedGames = games.map((game) => {
      console.log(game);
      return <a href={"/game?ID=" + game.id}>
        <GameTile key={game.id} imagePath={game.thumbnailpath}
          title={game.title}>
        </GameTile>
      </a>
    })
    return renderedGames
  }


  return (
    <div className="landing-page-container">
      <TrendingShowcase imagePath={'https://www.lumias.io/static/media/Enders_Gate.png'}
        title={"Enders Gate"}
        description={games[0].description}
        trailerLink="https://twitter.com/i/status/1673524966275383296"
        playLink="https://www.endersgate.gg/" />
      <h1>All Games</h1>
      <div className="games-list-container">
        {renderGames()}
      </div>
    </div>
  );
};

export default AllGamesPage;

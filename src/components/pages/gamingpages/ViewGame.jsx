import React, { useEffect } from "react";
import "./ViewGame.css";


const ViewGamePage = () => {
    const [game, setGame] = React.useState({
        title: "",
        thumbnailpath: "",
        trailerpath: "",
        playpath: "",
        abouttext: "",
        developertext: "",
        tokenomicspath: "",
        hasnfts: false,
        isfreetoplay: false
    });

    const [gameID, setGameID] = React.useState(-1)

    const getGame = () => {
        fetch('https://www.lumias.io/api/game/' + gameID)
            .then((res) => res.json())
            .then((data) => {
                console.log("got games", data);
                setGame({ ...data });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        if (gameID === -1) {
            const searchParams = new Proxy(new URLSearchParams(window.location.search), {
                get: (searchParams, prop) => searchParams.get(prop),
            });
            const gameID = Number(searchParams.ID);
            setGameID(gameID);
            return
        }

        if (gameID !== -1) {
            getGame();
        }
    }, [gameID]);



    return (
        <div className="landing-page-container">
            <div className="game-banner" style={{ backgroundImage: `url(${game.thumbnailpath})` }}>
                <div className="title-container">
                    <h1>{game.title}</h1>
                </div>
            </div>
            <div>
                <button className="primary" onClick={() => {window.open(game.playpath)}}>Play</button>
                <button className="secondary" onClick={() => {window.open(game.trailerpath)}}>Trailer</button>
            </div>
            <div className="game-details">
                <h2>About</h2>
                <p>{game.abouttext}</p>
                <h2>Developers</h2>
                <p>{game.developertext}</p>
            </div>
        </div>
    );
};

export default ViewGamePage;

import React from "react";
import "./game-tile.css";

class GameTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { imagePath, title, timePlayed } = this.props

        return (
            <div className="game-tile-container">
                <div className="game-image" style={{backgroundImage: `url(${imagePath})`}}>
                </div>
                <div>
                    <h3>{title}</h3>
                </div>
            </div>);
    }
}

export default GameTile;
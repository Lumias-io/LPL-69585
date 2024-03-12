import React from "react";
import "./recently-played-tile.css";

class RecentlyPlayedTile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { imagePath, title, timePlayed } = this.props

        return (
            <div className="recently-played-tile-container">
                <div className="recently-played-image">
                    <img src={imagePath} alt="mainlogo" />
                </div>
                <div>
                    <h3>{title}</h3>
                    <p className="sub-text">{timePlayed}</p>
                </div>
            </div>);
    }
}

export default RecentlyPlayedTile;
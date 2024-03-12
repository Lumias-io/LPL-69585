import React from "react";
import "./trending-showcase.css";

class TrendingShowcase extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {imagePath, title, description, playLink, trailerLink} = this.props

        return (
            <div className="trending-showcase-container card" style={{ backgroundImage: `url(${imagePath})` }}>
                <div className="info card">
                    <div>
                        <p className="hashtag">
                            #NewlyListed
                        </p>
                        <h1>
                            {title}
                        </h1>
                        <p className="sub-text">
                            {description}
                        </p>
                    </div>
                    <div className="buttonContainer">
                        <button className="primary" onClick={() => {window.open(playLink)}}>
                            PLAY
                        </button>
                        <button className="secondary" onClick={() => {window.open(trailerLink)}}>
                            Trailer
                        </button>
                    </div>
                </div>
            </div>);
    }
}

export default TrendingShowcase;
import React from "react";
import "./voice-channel.css";

class VoiceChannel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { level, friendsList, recentTeammates } = this.props

        return (
            <div className="card">
                <h2>
                    Voice Channel
                </h2>
                <div className="connected-avatars">
                    Avatars here
                </div>
                <div className="button-container">
                    Controls Here
                </div>
                <div className="connection-status">
                    You are in voice!
                    Voice is right now on chain Tx: 2392832938
                </div>
            </div>);
    }
}

export default VoiceChannel;
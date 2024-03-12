import React from "react";
import "./friends-list.css";
import FriendsListItem from "../friends-list-item/friends-list-item";
import Avatar from "../../../assets/landingpage/avatar.png";

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { level, friendsList, recentTeammates } = this.props;

    return (
      <div className="friends-list-container card">
        <h2>SOCIALS</h2>
        <div className="level-tracker">
          <div>
            <span className="sub-text">This is your current Level</span>
            <br></br>
            <span className="sub-text">
              You can level up by inviting friends
            </span>
          </div>
          <div className="level-counter">17</div>
        </div>
        <div className="friends-list">
          <h3>ONLINE 3 - </h3>
          <FriendsListItem
            userName="PeTetTheGamer#4126"
            status="Playing Planet discoverer 3 now"
            imagePath={Avatar}
          ></FriendsListItem>
          <FriendsListItem
            userName="Manuealla#3525"
            status="Playing Planet discoverer 3 now"
            imagePath={Avatar}
          ></FriendsListItem>
          <FriendsListItem
            userName="SmithTheSamsters#1911"
            status="Playing Hackers Group 2 now"
            imagePath={Avatar}
          ></FriendsListItem>
        </div>
        <div className="recent-teammate-list">
          <h3>RECENT TEAMMATES - </h3>
          <FriendsListItem
            userName="SmithTheSamsters#1911"
            status="Playing Hackers Group 2 now"
            imagePath={Avatar}
            showAddButton
          ></FriendsListItem>
          <FriendsListItem
            userName="SmithTheSamsters#1911"
            status="Playing Hackers Group 2 now"
            imagePath={Avatar}
            showAddButton
          ></FriendsListItem>
        </div>
      </div>
    );
  }
}

export default FriendsList;

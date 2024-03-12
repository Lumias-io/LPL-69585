import React from "react";
import "./friends-list-item.css";

class FriendsListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { imagePath, userName, status, showAddButton } = this.props;

    return (
      <div className="friends-list-item-container">
        <div className="friends-list-item-info">
          <div className="avatar-container">
            <img src={imagePath}></img>
          </div>
          <div>
            <span>{userName}</span>
            <br></br>
            <span className="sub-text">{status}</span>
          </div>
        </div>
        {showAddButton && (
          <button className="add-friend-btn secondary">Add</button>
        )}
      </div>
    );
  }
}

export default FriendsListItem;

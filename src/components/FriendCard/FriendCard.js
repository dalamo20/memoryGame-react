import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.toggleFriends(props.id)}  className="img-container toggle">
      <img src={props.image} />
  </div>
);

export default FriendCard;

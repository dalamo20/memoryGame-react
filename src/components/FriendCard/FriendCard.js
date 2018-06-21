import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.handleScore(props.index)}  className="img-container toggle">
      <img src={props.image} />
  </div>
);

export default FriendCard;

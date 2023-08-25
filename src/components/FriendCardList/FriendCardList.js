import React from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";

const FriendCardList = ({ friends, handleScore, message, completed }) => {
  return (
    <Wrapper>
      <div className="alert-container">
        {message && (
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        )}
        {completed && (
          <div className="alert alert-success" role="alert">
            Congratulations! You completed the task. Click an image to play
            again.
          </div>
        )}
      </div>
      <div className="friend-card-container">
        {friends.map((friend, index) => (
          <div key={friend.id} className="img-container">
            <FriendCard
              image={friend.image}
              index={index}
              handleScore={handleScore}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FriendCardList;

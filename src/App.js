import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Hero backgroundImage="./img/catHero.jpg">
          <h1>CLICK IT or TICK IT</h1>
          <h2>Make that kitty purrrr!</h2>
        </Hero>
        <Wrapper>
          <Title>Clicky Game Thingy</Title>
          {this.state.friends.map(friend => (
            <FriendCard
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;

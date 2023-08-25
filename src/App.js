import React, { Component } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FriendCardList from "./components/FriendCardList";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends: [], // You can initialize this with an empty array
    score: 0,
    topScore: 0,
    message: "",
    completed: false,
  };

  componentDidMount() {
    this.setState({ friends: friends });
  }

  //this should shuffle my cards
  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  handleScore = (index) => {
    const array = [...this.state.friends];
    if (!array[index].clicked) {
      array[index].clicked = true;
      const newScore = this.state.score + 1;
      const newTopScore = Math.max(newScore, this.state.topScore);

      if (newScore === 12) {
        this.setState({
          score: newScore,
          topScore: newTopScore,
          friends: this.shuffle(array),
          message: "",
          completed: true,
        });
      } else {
        this.setState({
          score: newScore,
          topScore: newTopScore,
          friends: this.shuffle(array),
          message: "",
        });
      }
    } else {
      array.forEach((friend) => (friend.clicked = false));
      this.setState({
        score: 0,
        friends: this.shuffle(array),
        message:
          "Oops! You clicked the same image twice. Click an image to start again.",
        completed: false,
      });
    }
  };

  render() {
    const { score, topScore, message, completed, friends } = this.state;

    return (
      <div className="main-container">
        <Navbar score={score} topScore={topScore} />
        <Hero backgroundImage="./img/catHero.jpg">
          <h1>CAT MEMORY GAME</h1>
          <h4>Click one of the cat images below.</h4>
          <h4>Avoid clicking on the same cat image twice.</h4>
        </Hero>
        <FriendCardList
          friends={friends}
          handleScore={this.handleScore}
          message={message}
          completed={completed}
        />
      </div>
    );
  }
}

export default App;

//BELOW I COMMENTED OUT WHAT I WANTED TO BE MY SHUFFLE FUNCTION. I ADDED ONCLICK=PROPS.TOGGLEFRIENDS TO MY IMG-CONTAINER HOPING TO DO SOME MAGIC
//COULDN'T GET MY NAVBAR TO SHOW SO I COMMENTED THAT OUT. IN THE STATE I SET
//SCORE AND TOPSCORE TO ZERO. I WANTED TO MAKE A SWITCH STATEMENT
//IN THE METHOD BELOW HANDLESCORE TO INCREMENT THE SCOREBOARD THAT WOULD HAVE 
//BEEN THE NAVBAR

import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends, //this should probably be an empty array
    score: 0,
    topScore: 0
  };

  //this should shuffle my cards
  shuffle = array => {
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
  }

  // handleIncrement increments this.state.count by 1
  handleScore = (index) => {
    //if i click on a duplicate card, score returns to 0
    //if id 1 = id 1 , then this is duplicate
    var array = this.state.friends
    if (!array[index].clicked) {
        array[index].clicked = true;
      // We always use the setState method to update a component's state
        this.setState({
          score: this.state.score + 1,
          topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore,
          friends: this.shuffle(array)
        });
    } else {
      array.forEach(friend => friend.clicked = false)
      this.setState({
        score: 0,
        friends: this.shuffle(array)
      })
    }
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Hero backgroundImage="./img/catHero.jpg">
          <h1>CLICK IT or TICK IT</h1>
          <h2>Make that kitty purrrr!</h2>
        </Hero>
        <Wrapper>
          {this.state.friends.map((friend, i) => (
            <FriendCard
              index={i}
              key={friend.id}
              image={friend.image}
              handleScore={this.handleScore}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;

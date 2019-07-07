import React, { Component } from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import "./App.css";

class App extends Component {

  state = { dogs };

  removeDog = id => {
    const dogs = this.state.dogs.filter(dog => friend.id !== id);
    this.setState({ dogs });
  };

  render() {
    return (
      <Wrapper>
        <Title>All the dogs!</Title>
        <Card
          removeDog={this.removeDog}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      </Wrapper>
    );
  };
  
}

export default App;

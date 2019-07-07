import React, { Component } from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";
import "./App.css";

class App extends Component {

  state = { 
    dogs, 
    count: 0 
  };

  handleClick = event => {

    const cardCounter = event.target.attributes.getNamedItem("count").value;
    const newState = { ...this.state };

    if (cardCounter !== 0) {
      console.log("clicked " + cardCounter);
    }
    this.setState({ count: this.state.count + 1 });
  };

  // removeDog = id => {
  //   const dogs = this.state.dogs.filter(dog => dog.id !== id);
  //   this.setState({ dogs });
  // };

  render() {
    return (
      <Wrapper>
        <Title>Dogs Throughout Art History!</Title>
        {this.state.dogs.map(dog => (
          <Card
            removeDog={this.removeDog}
            id={dog.id}
            key={dog.id}
            title={dog.title}
            artist={dog.artist}
            image={dog.image}
            origin={dog.origin}
          />
        ))}
      </Wrapper>
    );
  };

}

export default App;

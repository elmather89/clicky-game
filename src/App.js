import React, { Component } from "react";
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import dogs from "./dogs.json";
import "./App.css";

class App extends Component {

  state = { 
    dogs,
    clicked: false
  };

  handleClick = id => {
    this.setState({ "id.clicked": true });

    // const dogs = this.state.dogs.filter(dog => dog.id !== clicked);
    // this.setState({ dogs });
    // console.log(this.dogs);
  };

  // removeDog = id => {
  //   const dogs = this.state.dogs.filter(dog => dog.id !== id);
  //   this.setState(this.id);
  // };

  render() {
    return (
      <Wrapper>
        <Title>Dogs Throughout Art History!</Title>
        {this.state.dogs.map(dog => (
          <Card
          handleClick={this.handleClick}
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

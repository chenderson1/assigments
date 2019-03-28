import React, { Component } from "react";
import data from "../data.json";
import styled from "styled-components";
import SuperHero from "./SuperHero";

const HeroList = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  * {
    font-family: "Roboto", sans-serif;
  }

  display: grid;
  justify-items: center;
`;

class App extends Component {
  state = {
    heroes: data
  };

  handleClick = phrase => {
    alert(phrase);
  };

  render() {
    const mappedheroes = this.state.heroes.map((hero, i) => {
      return (
        <SuperHero
          name={hero.name}
          show={hero.show}
          catchPhrase={hero.catchPhrase}
          imageName={hero.imageName}
          handleClick={this.handleClick}
          key={hero.imageName + i}
        />
      );
    });

    return <HeroList>{mappedheroes}</HeroList>;
  }
}

export default App;

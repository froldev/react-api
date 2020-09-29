import React, { Component } from "react";

import DisplayCharacter from "./DisplayCharacter"
import "./Characters.css";

class Characters extends Component {
  state = {
    characters: [],
  };

  getCharacters = () => {
    fetch("https://akabab.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => this.setState({ characters: res }));
  };

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    return (
      <div>
        <h1>Characters :</h1>
        <div>
          {this.state.characters.map((character) => (
            <DisplayCharacter character={character} key={character.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Characters;

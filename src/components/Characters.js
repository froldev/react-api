import React, { Component } from "react";
import axios from "axios";

import DisplayCharacter from "./DisplayCharacter";
import "./Characters.css";

class Characters extends Component {
  state = {
    characters: [],
    isLoaded: false,
  };

  getCharacters = async () => {
    const result = await axios.get(
      "https://akabab.github.io/starwars-api/api/all.json"
    );
    this.setState({ characters: result.data, isLoaded: true });
  };

  componentDidMount() {
    this.getCharacters();
  }

  render() {
    const { characters, isLoaded } = this.state;
    return (
      <>
        {!isLoaded ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>Characters :</h1>
            <div>
              {characters.map((character) => (
                <DisplayCharacter character={character} key={character.id} />
              ))}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Characters;

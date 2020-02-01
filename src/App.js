import React, { Component } from "react";
import Input from "./Components/Input";
import Results from "./Components/Results";
import "./App.css";

class App extends Component {
  state = {
    capitale: undefined,
    continent: undefined,
    drapeau: undefined,
    nom: undefined,
    population: undefined,
    monnaie: undefined,
    error: undefined
  };

  getResult = async e => {
    e.preventDefault();
    const search = e.target.elements.input.value;

    if (search) {
      const url = `https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/name/${search}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.message) {
        this.setState({
          capitale: undefined,
          continent: undefined,
          drapeau: undefined,
          nom: undefined,
          population: undefined,
          monnaie: undefined,
          error: "Votre pays n'existe pas. Essayez autre chose !"
        });
      } else {
        this.setState({
          capitale: data[0].capital,
          continent: data[0].region,
          drapeau: data[0].flag,
          nom: data[0].altSpellings[2],
          population: data[0].population,
          monnaie: data[0].currencies[0],
          error: ""
        });
      }
    } else {
      this.setState({
        capitale: undefined,
        continent: undefined,
        drapeau: undefined,
        nom: undefined,
        population: undefined,
        monnaie: undefined,
        error: "Entrez un pays !"
      });
    }
  };

  render() {
    return (
      <div>
        <Input getResult={this.getResult} />
        <Results
          capitale={this.state.capitale}
          continent={this.state.continent}
          error={this.state.error}
          drapeau={this.state.drapeau}
          nom={this.state.nom}
          population={this.state.population}
          monnaie={this.state.monnaie}
        />
      </div>
    );
  }
}

export default App;

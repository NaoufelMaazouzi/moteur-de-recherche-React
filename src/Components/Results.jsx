import React, { Component } from "react";
import "../style.css";

class Results extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.drapeau && (
          <img
            className="img"
            src={this.props.drapeau}
            alt="drapeau du pays"
          ></img>
        )}
        {this.props.capitale && <p>Capitale: {this.props.capitale}</p>}
        {this.props.continent && <p>Continent: {this.props.continent}</p>}
        {this.props.nom && <p>nom: {this.props.nom}</p>}
        {this.props.population && <p>population: {this.props.population}</p>}
        {this.props.monnaie && (
          <p>
            monnaie: {this.props.monnaie.code}, {this.props.monnaie.name},{" "}
            {this.props.monnaie.symbol}
          </p>
        )}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default Results;

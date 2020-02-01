import React, { Component } from "react";
import "../style.css";

class Input extends Component {
  state = {};
  render() {
    return (
      <div className="divSearch">
        <form onSubmit={this.props.getResult}>
          <h1>Noogle</h1>
          <input
            className="input"
            type="text"
            name="input"
            placeholder="Quel pays recherchez-vous ?"
          />
          <button className="button">Rechercher</button>
        </form>
      </div>
    );
  }
}

export default Input;

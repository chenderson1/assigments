import React, { Component } from "react";

class App extends Component {
  state = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6
  };

  onDiceRoll = e => {
    // roll them shits
  };

  render() {
    const style = {
      container: {
        width: "50vw",
        display: "grid",
        margin: "100px auto",
        justifyItems: "center"
      },
      span: {
        width: "50%",
        height: "50px",
        border: "solid black 1px",
        textAlign: "center",
        marginBottom: "20px"
      }
    };
    return (
      <div style={style.container}>
        <span style={style.span}>Number One: {this.state.one}</span>
        <span style={style.span}>Number two: {this.state.two}</span>
        <span style={style.span}>Number three: {this.state.three}</span>
        <span style={style.span}>Number four: {this.state.four}</span>
        <span style={style.span}>Number five: {this.state.five}</span>
        <span style={style.span}>Number six: {this.state.six}</span>
        <button onClick={this.onDiceRoll}>Roll Dice</button>
      </div>
    );
  }
}

export default App;

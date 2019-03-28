import React from "react";

class App extends React.Component {
  state = {
    inputName: "",
    names: []
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  handleClick = e => {
    this.setState(prevState => {
      return {
        names: [...prevState.names, this.state.inputName],
        inputName: ""
      };
    });
  };

  render() {
    const mappedNames = this.state.names.map((name, i) => {
      return <li key={name + i}>{name}</li>;
    });

    return (
      <div>
        <h1>{this.state.inputName}</h1>
        <br />
        <br />
        <label>Enter Name: </label>
        <br />
        <input
          name="inputName"
          type="text"
          onChange={this.handleChange}
          value={this.state.inputName}
        />
        <br />
        <br />
        <button onClick={this.handleClick}>Add Name</button>
        <ul>{mappedNames}</ul>
      </div>
    );
  }
}

export default App;

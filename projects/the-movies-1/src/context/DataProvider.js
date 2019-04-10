import React, { Component } from "react";
export const { Provider, Consumer } = React.createContext();

export class DataProvider extends Component {
  state = {};

  render() {
    return (
      <Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default DataProvider;

export const withData = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);

import React, { Component } from "react";
export const { Provider, Consumer } = React.createContext();

// =================================CONTEX NOT USED. WAS JUST PRACTICE=====================================================================================
// =========================AND PROBABLY REFERENCE FOR THE NEXT TIME I DO NEED CONTEXT==========================================================================

export class DataProvider extends Component {
  state = {
    apiData: []
  };

  handeClick() {}

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

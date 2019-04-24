import React, { Component } from "react";
import axios from "axios";

export const { Provider, Consumer } = React.createContext();

export class BountyDataProvider extends Component {
  state = {
    bounties: []
  };

  getBounties = async () => {
    try {
      const res = await axios.get("/api/bounties");
      this.setState({ bounties: res.data });
    } catch (err) {
      console.log(err.response.data.errMsg);
    }
  };

  addBounty = async newBounty => {
    try {
      const res = await axios.post("/api/bounties");
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data.errMsg);
    }
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getBounties: this.getBounties,
          addBounty: this.addBounty
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default BountyDataProvider;

export const withBounties = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);

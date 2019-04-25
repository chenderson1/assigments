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
      const res = await axios.post("/api/bounties", newBounty);
      this.setState(prevState => {
        return { bounties: [...prevState.bounties, res.data] };
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  editBounty = async (id, newBounty) => {
    const res = await axios.put(`/api/bounties/${id}`, newBounty);

    const updatedDB = this.state.bounties.map(bounty => {
      if (bounty._id === id) {
        return res.data;
      }
      return bounty;
    });

    this.setState({ bounties: updatedDB });
  };

  removeBounty = async id => {
    try {
      const res = await axios.delete(`/api/bounties/${id}`);
      const updatedDB = this.state.bounties.filter(bounty => {
        return bounty._id !== id;
      });
      this.setState({ bounties: updatedDB });
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
          addBounty: this.addBounty,
          removeBounty: this.removeBounty,
          editBounty: this.editBounty
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

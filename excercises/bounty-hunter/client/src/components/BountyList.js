import React, { Component } from "react";
import Bounty from "./Bounty";
import { withBounties } from "../context/dataContext";

export class BountyList extends Component {
  componentDidMount() {
    this.props.getBounties();
  }

  render() {
    const mappedBounties = this.props.bounties.map(bounty => {
      return <Bounty key={bounty._id} {...bounty} />;
    });
    return <div>{mappedBounties}</div>;
  }
}

export default withBounties(BountyList);

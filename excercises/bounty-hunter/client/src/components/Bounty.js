import React, { Component } from "react";
import { withBounties } from "../context/dataContext";
import { AddBountyForm } from "../components";

export class Bounty extends Component {
  state = {
    isEdit: false,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    bounty: this.props.bounty,
    type: this.props.type,
    isAlive: this.props.isAlive
  };

  onToggle = () => {
    this.setState(prevState => {
      return {
        isEdit: !prevState.isEdit
      };
    });
  };

  handleChange = e => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: e.target.type === "checkbox" ? checked : value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const updates = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      bounty: this.state.bounty,
      type: this.state.type,
      isAlive: this.state.isAlive
    };

    this.props.editBounty(this.props._id, updates);

    this.setState({
      firstName: "",
      lastName: "",
      bounty: 0,
      type: "",
      isAlive: false
    });
    this.onToggle();
  };

  render() {
    const newBounty = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      bounty: this.state.bounty,
      type: this.state.type,
      isAlive: this.state.isAlive
    };

    return this.state.isEdit ? (
      <>
        <AddBountyForm
          {...this.state}
          newBounty={newBounty}
          _id={this.props._id}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editBounty={this.props.editBounty}
          onToggle={this.onToggle}
        />
        <button onClick={this.onToggle}>Close</button>
      </>
    ) : (
      <>
        <h2>{this.props.firstName}</h2>
        <h2>{this.props.lastName}</h2>
        <p> Are you there? {this.props.isAlive ? "Alive" : "Dead"}</p>
        <p>Bounty: {this.props.bounty}</p>
        <p>Type: {this.props.type}</p>
        <button onClick={this.onToggle}>Edit</button>
        <button onClick={() => this.props.removeBounty(this.props._id)}>
          Delete
        </button>
      </>
    );
  }
}

export default withBounties(Bounty);

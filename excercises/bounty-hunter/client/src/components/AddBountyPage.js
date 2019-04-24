import React, { Component } from "react";
import { withBounties } from "../context/dataContext";
import { AddBountyForm } from "../components";

export class AddBountyPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    bounty: 0,
    type: "",
    isAlive: false,
    isEdit: false
  };

  handleChange = e => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: e.target.type === "checkbox" ? checked : value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBounty(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      bounty: 0,
      type: "",
      isAlive: false,
      isEdit: false
    });
  };

  render() {
    return (
      <div>
        <AddBountyForm
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default withBounties(AddBountyPage);

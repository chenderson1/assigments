import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    birthPlace: "",
    phone: "",
    favFood: "",
    desc: ""
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let blankState = {
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      desc: ""
    };
    this.setState(blankState);

    this.props.handleSubmit(this.state);
    console.log(e.target.parentNode);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
          required
          minLength={3}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          required
          onChange={this.handleChange}
          minLength={3}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
          required
          minLength={3}
        />
        <input
          name="birthPlace"
          placeholder="Place of Birth"
          value={this.state.birthPlace}
          onChange={this.handleChange}
          required
          minLength={3}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={this.state.phone}
          onChange={this.handleChange}
          required
          minLength={3}
          //   pattern={/{0 - 9}/}
        />
        <input
          name="favFood"
          placeholder="Favorite Food"
          value={this.state.favFood}
          onChange={this.handleChange}
          required
          minLength={3}
        />
        <textarea
          name="desc"
          placeholder="Tell us about yourslef"
          value={this.state.desc}
          required
          minLength={3}
          onChange={this.handleChange}
        >
          {" "}
        </textarea>{" "}
        <br />
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;

import React, { Component } from "react";
import { StyledBtn, StyledInput } from "../elements";

export class SearchBar extends Component {
  state = {
    searchValue: ""
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.searchMovies(this.state.searchValue);
    this.setState({ searchValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <i className="fa fa-search" aria-hidden="true" />
        <StyledInput
          name="searchValue"
          type="text"
          value={this.state.searchValue}
          onChange={this.onInputChange}
          minLength="3"
          placeholder="Title, People, Genre"
          required
        />
        <StyledBtn>Search</StyledBtn>
      </form>
    );
  }
}

export default SearchBar;

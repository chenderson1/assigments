import React, { Component } from "react";
import axios from "axios";
import { SearchBar, Movie } from "../components";
import { ListGrid, CenterDiv, StyledBtn } from "../elements";

export class Search extends Component {
  state = {
    movies: [],
    input: "",
    page: 1
  };

  searchMovies = async searchValue => {
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&query=${searchValue}&page=${
        this.state.page
      }`
    );
    this.setState({
      movies: movieRes.data.results,
      input: searchValue
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    //make uodated state data load. Two cases below:

    //if changing page only do that
    if (prevState.page !== this.state.page) {
      this.searchMovies(this.state.input);
      window.scrollTo(0, 0);
    } //if changing paths reset the page number first. used await for random times page change didnt happen first.
    else if (prevProps.location.pathname !== this.props.location.pathname) {
      await this.setState({ page: 1 });
      this.searchMovies(this.state.input);
    }
  }

  handleClick = e => {
    const { name } = e.target;
    name === "plus"
      ? this.setState(prev => {
          return { page: prev.page + 1 };
        })
      : this.setState(prev => {
          if (this.state.page > 1) {
            return { page: prev.page - 1 };
          }
        });
  };

  render() {
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });
    return (
      <div>
        <SearchBar searchMovies={this.searchMovies} />
        <ListGrid>{mappedMovies}</ListGrid>
        {this.state.movies.length > 0 && (
          <CenterDiv>
            <StyledBtn name="minus" onClick={this.handleClick}>
              -
            </StyledBtn>
            <span style={{ color: "white", fontSize: "1.2rem" }}>
              {this.state.page}
            </span>
            <StyledBtn
              name="plus"
              onClick={this.handleClick}
              disabled={this.state.movies.length < 20}
            >
              +
            </StyledBtn>
          </CenterDiv>
        )}
      </div>
    );
  }
}

export default Search;

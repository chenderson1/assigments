import React, { Component } from "react";
import axios from "axios";
import { SearchBar, Movie } from "../components";
import { ListGrid } from "../elements";

export class Search extends Component {
  state = {
    movies: []
  };

  componentDidMount() {}
  searchMovies = async searchValue => {
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&query=${searchValue}`
    );
    this.setState({
      movies: movieRes.data.results
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
      </div>
    );
  }
}

export default Search;

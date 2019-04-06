import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import { ListGrid, StyledBtn, StyledInput, StyledIcon } from "../elements";

export class SearchBar extends Component {
  state = {
    movies: [],
    searchValue: "",
    searchMovieRes: []
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      this.setState({ movies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  }
  searchMovies = async () => {
    const movieRes = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&query=${
        this.state.searchValue
      }`
    );
    this.setState({
      searchMovieRes: movieRes.data.results,
      searchValue: ""
    });
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    this.searchMovies();
  };
  render() {
    const { searchMovieRes, searchValue } = this.state;
    const { children } = this.props;

    let mappedMovies = [];
    if (searchMovieRes.length > 0) {
      mappedMovies = searchMovieRes.map(movie => {
        return <Movie key={movie.id} {...movie} {...this.props} />;
      });
    } else {
      mappedMovies = this.state.movies.map(movie => {
        return <Movie key={movie.id} {...movie} {...this.props} />;
      });
    }
    return (
      <div>
        {children({
          movies: mappedMovies
        })}
      </div>
    );
  }
}

export default SearchBar;

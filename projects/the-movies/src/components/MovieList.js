import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";

export class MovieList extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    //make http req to api
    //set results to sate
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      this.setState({ movies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    //map through the movies in state to var mappedMovies
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });

    return <div>{mappedMovies}</div>;
  }
}

export default MovieList;

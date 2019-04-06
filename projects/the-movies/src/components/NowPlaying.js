import React, { Component } from "react";
import { Movie } from "../components";
import { ListGrid } from "../elements";

import axios from "axios";

export class NowPlaying extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    //make http req to api
    //set results to sate
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US"
      );
      this.setState({ movies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} {...this.props} />;
    });
    return <ListGrid>{mappedMovies}</ListGrid>;
  }
}

export default NowPlaying;

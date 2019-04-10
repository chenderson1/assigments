import React, { Component } from "react";
import axios from "axios";
import { Poster, BackDrop } from "../elements";

export class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US`
      );
      this.setState({ movie: res.data });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <BackDrop
          src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
        />

        <Poster
          src={`http://image.tmdb.org/t/p/w154${movie.poster_path}`}
          alt={movie.title}
        />
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;

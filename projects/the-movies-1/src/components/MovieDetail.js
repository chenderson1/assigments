import React, { Component } from "react";
import axios from "axios";
import { Poster, BackDrop } from "../elements";
import { SimilarMovies } from "../components";
import { MovieWrapper, MovieInfo } from "../elements";

export class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async getApiData(id) {
    if (id) {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US`
        );
        this.setState({ movie: res.data });
      } catch (e) {
        console.log(e);
      }
    }

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

  componentDidMount() {
    this.getApiData();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.movie.id !== this.state.movie.id) {
      this.getApiData(this.state.movie.id);
    }
  }

  handleMovieClick = id => {
    this.getApiData(id);
  };

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper>
        <BackDrop
          src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={movie.title}
        />
        <MovieInfo>
          <a
            href={
              movie.homepage
                ? `${movie.homepage}`
                : `https://www.imdb.com/title/${this.state.movie.imdb_id}/`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <Poster
              src={`http://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
            />
          </a>
          <div>
            <h1>{movie.title}</h1> <br />
            <br />
            <h3>
              <span style={{ color: "#3b1a7c" }}>Release Date: </span>
              {movie.release_date}
            </h3>
            <br />
            <p>{movie.overview}</p>
            <br />
            <div />
          </div>
        </MovieInfo>
        {movie.id && (
          <SimilarMovies
            id={movie.id}
            {...this.props}
            handleMovieClick={this.handleMovieClick}
          />
        )}
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

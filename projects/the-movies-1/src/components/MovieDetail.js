import React, { Component, Fragment } from "react";
import axios from "axios";
import Overdrive from "react-overdrive";
import { Poster, BackDrop } from "../elements";
import { SimilarMovies } from "../components";
import { MovieWrapper, MovieInfo } from "../elements";

let prodCom;

export class MovieDetail extends Component {
  state = {
    movie: {}
  };

  // get api data/ use id from args if available or props
  async getApiData(id) {
    if (id) {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            process.env.REACT_APP_API_KEY
          }&language=en-US`
        );
        this.setState({ movie: res.data });
        prodCom = this.state.movie.production_companies[0];
      } catch (e) {
        console.log(e);
      }
      window.scroll(0, 0);
    }

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      this.setState({ movie: res.data });
    } catch (e) {
      console.log(e);
    }
  }
  //grab data after first render
  componentDidMount() {
    this.getApiData();
  }
  //grab new data with new id from params
  componentDidUpdate(prevProps, prevState) {
    if (prevState.movie.id !== this.state.movie.id) {
      this.getApiData(this.state.movie.id);
    }
  }
  // handle similar movie click to get new data
  handleMovieClick = id => {
    this.getApiData(id);
  };

  render() {
    const { movie } = this.state;
    const style = { color: "#3b1a7c" };

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    return (
      //moviewrapper(styled div)
      <MovieWrapper>
        {/* backdrop(styled img tag) */}
        <BackDrop
          src={
            movie.backdrop_path
              ? `http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
              : require("../resources/images/1246022efb2bb75fce1fa17edcec3269.jpg")
          }
          alt={movie.title}
        />
        {/* ============================Detailed Movie Display=========================== */}
        <MovieInfo>
          {/* MovieInfo(styled div) */}
          <a
            href={
              movie.homepage
                ? `${movie.homepage}`
                : `https://www.imdb.com/title/${this.state.movie.imdb_id}/`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* overdrive  wrapper for transitions */}
            <Overdrive id="poster-1" duration={500}>
              <Poster
                src={
                  movie.poster_path
                    ? `http://image.tmdb.org/t/p/w185${movie.poster_path}`
                    : require("../resources/images/avatar_texture_by_asilh87-dcjzc14.png")
                }
                alt={movie.title}
              />
            </Overdrive>
          </a>
          <h1>{movie.title}</h1> <br />
          <h3 className="release">
            <span style={style}>Release Date: </span>
            <br />
            {movie.release_date}
          </h3>
          <p className="overview">{movie.overview}</p>
          <div />
          <p className="runtime">
            <span style={style}>Runtime: </span>
            {movie.runtime}
            <span style={style}>min </span>
          </p>
          {movie.budget > 0 && (
            <p className="budget">
              <span style={style}>Budget: </span>
              {`${formatter.format(movie.budget)}`}
            </p>
          )}
          {movie.revenue > 0 && (
            <p className="revenue">
              <span style={style}>Revenue: </span>
              {`${formatter.format(movie.revenue)}`}
            </p>
          )}
          <p className="voteAvg">
            <span style={{ color: "#b09500" }}>Vote Avg: </span>
            {movie.vote_average}
          </p>
          <p className="voteCount">
            <span style={{ color: "#b09500" }}>Vote Count: </span>
            {movie.vote_count}
          </p>
          {prodCom && (
            <Fragment>
              {prodCom.name && <h3 className="prodname">{prodCom.name}</h3>}

              <Poster
                className="logo"
                src={
                  prodCom.logo_path
                    ? `http://image.tmdb.org/t/p/w185${prodCom.logo_path}`
                    : require("../resources/images/avatar_texture_by_asilh87-dcjzc14.png")
                }
              />
              <p />
            </Fragment>
          )}
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

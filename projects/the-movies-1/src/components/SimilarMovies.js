import React, { Component, Fragment } from "react";
import axios from "axios";
import { Movie } from "../components";
import { ListGrid } from "../elements";

export class SimilarMovies extends Component {
  state = {
    movies: []
  };

  getApiData = async (id = this.props.id) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US&page=1`
    );
    this.setState({ movies: res.data.results });
  };

  componentDidMount() {
    this.getApiData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.handleMovieClick(this.props.match.params.id);
      this.getApiData(this.props.match.params.id);
      window.scroll(0, 0);
    }
  }

  render() {
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });
    return (
      <Fragment>
        {this.state.movies.length > 0 && (
          <Fragment>
            <h2 style={{ color: "white", textAlign: "center" }}>
              Similar Movies
            </h2>
            <ListGrid>{mappedMovies}</ListGrid>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default SimilarMovies;

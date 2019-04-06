import React, { Component, Fragment } from "react";
import axios from "axios";
import { Movie } from "../components";
import { ListGrid, StyledBtn } from "../elements";

export class MovieList extends Component {
  state = {
    movies: []
  };

  getApiData = async () => {
    try {
      const res = await axios.get(this.props.url);
      this.setState({ movies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getApiData();
  }

  componentDidUpdate() {
    this.getApiData();
  }

  render() {
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });
    return (
      <Fragment>
        <StyledBtn name="minus" onClick={e => this.props.handleClick(e)}>
          -
        </StyledBtn>
        <StyledBtn name="plus" onClick={e => this.props.handleClick(e)}>
          +
        </StyledBtn>
        <ListGrid>{mappedMovies}</ListGrid>
      </Fragment>
    );
  }
}

export default MovieList;

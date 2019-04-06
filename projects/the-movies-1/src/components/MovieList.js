import React, { Component, Fragment } from "react";
import axios from "axios";
import { Movie } from "../components";
import { ListGrid, StyledBtn } from "../elements";

export class MovieList extends Component {
  state = {
    movies: [],
    page: 1
  };

  getApiData = async () => {
    try {
      const res = await axios.get(`${this.props.url}&page=${this.state.page}`);
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

  handleClick = e => {
    const { name } = e.target;
    if (name === "plus") {
      this.setState(prev => {
        return { page: prev.page + 1 };
      });
    } else {
      this.setState(prev => {
        return { page: prev.page - 1 };
      });
    }
  };

  render() {
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });
    return (
      <Fragment>
        <StyledBtn name="minus" onClick={this.handleClick}>
          -
        </StyledBtn>
        <span style={{ color: "white", fontSize: "1.2rem" }}>
          {this.state.page}
        </span>
        <StyledBtn name="plus" onClick={this.handleClick}>
          +
        </StyledBtn>
        <ListGrid>{mappedMovies}</ListGrid>
      </Fragment>
    );
  }
}

export default MovieList;

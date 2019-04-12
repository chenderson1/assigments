import React, { Component, Fragment } from "react";
import axios from "axios";
import { Movie } from "../components";
import {
  ListGrid,
  StyledBtn,
  CenterDiv,
  StyledSearchFirstBtn
} from "../elements";

export class MovieList extends Component {
  state = {
    movies: [],
    page: 1,
    isless: true
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
    //make initial state data load
    this.getApiData();
  }

  async componentDidUpdate(prevProps, prevState) {
    //make uodated state data load. Two cases below:

    //if changing page only do that
    if (prevState.page !== this.state.page) {
      this.getApiData();
      window.scrollTo(0, 0);
    } //if changing paths reset the page number first. used await for random times page change didnt happen first.
    else if (prevProps.location.pathname !== this.props.location.pathname) {
      await this.setState({ page: 1 });
      this.getApiData();
    }
  }

  handleClick = e => {
    const { name } = e.target;
    name === "plus"
      ? this.setState(prev => {
          return { page: prev.page + 1 };
        })
      : this.setState(prev => {
          if (this.state.page > 1) {
            return { page: prev.page - 1 };
          }
        });
  };
  onFirstPage = () => {
    this.setState({ page: 1 });
    this.getApiData();
  };

  render() {
    const mappedMovies = this.state.movies.map(movie => {
      return <Movie key={movie.id} {...movie} />;
    });
    return (
      <Fragment>
        <ListGrid>{mappedMovies}</ListGrid>
        <CenterDiv>
          <StyledSearchFirstBtn className="first" onClick={this.onFirstPage}>
            First
          </StyledSearchFirstBtn>
          <StyledBtn name="minus" onClick={this.handleClick}>
            -
          </StyledBtn>

          <span style={{ color: "white", fontSize: "1.2rem" }}>
            {this.state.page}
          </span>

          <StyledBtn name="plus" onClick={this.handleClick}>
            +
          </StyledBtn>
        </CenterDiv>
      </Fragment>
    );
  }
}

export default MovieList;

import React, { Component } from "react";
import axios from "axios";
export const { Provider, Consumer } = React.createContext();

export class DataProvider extends Component {
  state = {
    popularMovies: [],
    topRatedMovies: [],
    nowPlayingMovies: [],
    searchMovieRes: []
  };

  getPopMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US"
      );
      this.setState({ popularMovies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  getTopMovies = async type => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US"
      );
      this.setState({ topRatedMovies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  getNowMovies = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=7adde4820dd7c9401872a8ef46be7ecf&language=en-US"
      );
      this.setState({ nowPlayingMovies: res.data.results });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getPopMovies: this.getPopMovies,
          getTopMovies: this.getTopMovies,
          getNowMovies: this.getNowMovies,
          searchMovies: this.searchMovies
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default DataProvider;

export const withData = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);

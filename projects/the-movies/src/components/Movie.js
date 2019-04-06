import React from "react";
import { Route, Link } from "react-router-dom";
import { Poster } from "../elements";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

export const Movie = props => {
  return (
    <div>
      <Link to={`/movie/${props.id}`}>
        <Poster src={`${POSTER_PATH}${props.poster_path}`} alt={props.title} />
      </Link>
    </div>
  );
};

export default Movie;

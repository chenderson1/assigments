import React from "react";
import { Link } from "react-router-dom";
import { Poster } from "../elements";

export const Movie = props => {
  const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

  return (
    <div>
      <Link to={`/movie/${props.id}`}>
        <Poster src={`${POSTER_PATH}${props.poster_path}`} alt={props.title} />
      </Link>
    </div>
  );
};

export default Movie;

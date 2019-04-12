import React from "react";
import { Link } from "react-router-dom";
import { Poster } from "../elements";

export const Movie = props => {
  return (
    <div>
      <Link to={`/movie/${props.id}`}>
        <Poster
          src={`http://image.tmdb.org/t/p/w154${props.poster_path}`}
          alt={props.title}
        />
      </Link>
    </div>
  );
};

export default Movie;

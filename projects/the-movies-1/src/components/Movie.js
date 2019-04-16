import React from "react";
import { Link } from "react-router-dom";
import Overdrive from "react-overdrive";
import { Poster } from "../elements";

export const Movie = props => {
  return (
    <div>
      {/* Poster(img tag) wrapped by overdrive(transition .5s) & Link(to:/movie/:id) */}
      <Link to={`/movie/${props.id}`}>
        <Overdrive id="poster-1" duration={500}>
          <Poster
            src={
              props.poster_path
                ? `http://image.tmdb.org/t/p/w185${props.poster_path}`
                : require("../resources/images/avatar_texture_by_asilh87-dcjzc14.png")
            }
            alt={props.title}
          />
        </Overdrive>
      </Link>
      <div style={{ color: "white", width: "100px" }}>{props.title}</div>
    </div>
  );
};

export default Movie;

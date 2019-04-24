import React, { Fragment } from "react";

export const Bounty = props => {
  return (
    <Fragment>
      <h2>{props.firstName}</h2>
      <h2>{props.lastName}</h2>
      <p> Are you there? {props.isAlive ? "Alive" : "Dead"}</p>
      <p>Bounty: {props.bounty}</p>
      <p>Type: {props.type}</p>
      <button>Edit</button>
      <button>Delete</button>
    </Fragment>
  );
};

export default Bounty;

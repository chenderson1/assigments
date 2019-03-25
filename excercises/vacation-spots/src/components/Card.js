import React from "react";

const Card = props => {
  return (
    <div className="card">
      <h2 style={props.bgColor}>{props.place}</h2>
      <p>{`${props.expensive}${props.price}`}</p>
      <p>{props.timeToGo}</p>
    </div>
  );
};

export default Card;

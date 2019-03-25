import React from "react";

const Pet = props => {
  return (
    <div className="pet">
      <h4>
        {" "}
        Pet Name: <span>{props.name}</span>{" "}
      </h4>
      <p>
        Pet Breed: <span className="breed">{props.breed}</span>{" "}
      </p>
    </div>
  );
};

export default Pet;

import React from "react";
import Pet from "./Pet";

const Friend = props => {
  const mappedPets = props.pets.map(pet => {
    return <Pet name={pet.name} breed={pet.breed} key={pet.name + pet.age} />;
  });
  return (
    <div className="card">
      <div className="card-info">
        <h2>Name: {props.name}</h2>
        <br />
        <p>Age: {props.age}</p>
      </div>{" "}
      <div className="container pets">{mappedPets}</div>
    </div>
  );
};

export default Friend;

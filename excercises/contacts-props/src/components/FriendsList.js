import React from "react";
import Friend from "./Friend";
import data from "../data.json";

const FriendsList = () => {
  const mappedData = data.map(f => {
    return (
      <Friend name={f.name} age={f.age} pets={f.pets} key={f.name + f.age} />
    );
  });

  return <div className="list">{mappedData}</div>;
};

export default FriendsList;

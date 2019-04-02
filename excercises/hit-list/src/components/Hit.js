import React from "react";
import styled from "styled-components";

function Hit(props) {
  return (
    <ListItem>
      <div />
      <img src={props.image} alt="props.name" />
      <p>{props.name}</p>
    </ListItem>
  );
}

export default Hit;

const ListItem = styled.li`
  /* box-sizing: border-box; */
  * {
    margin: 0;
  }
  display: grid;
  grid-template-rows: 4;

  border: solid black 1px;
  list-style: none;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    grid-column: 1/-1;
    grid-row: 1/-1;
  }
  > p {
    text-align: center;
    background: #3b599890;
    grid-column: 1/-1;
    /* grid-row: 3/-1; */
  }
`;

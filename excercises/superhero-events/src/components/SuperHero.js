import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 40vw;
  height: 50vh;
  margin: 5vh 0;
  display: grid;
  grid-template-columns: minmax(350px, 2fr) minmax(150px, 1fr);
  grid-template-areas:
    "img name "
    "img show";

  & img {
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 9px;
  }

  h2 {
    grid-area: name;
    text-align: center;
  }
  p {
    grid-area: show;
    text-align: center;
  }
`;

const SuperHero = props => {
  return (
    <HeroWrapper onClick={() => props.handleClick(props.catchPhrase)}>
      <h2>{props.name}</h2>
      <img src={props.imageName} alt={props.name} />
      <p>{props.show}</p>
    </HeroWrapper>
  );
};

export default SuperHero;

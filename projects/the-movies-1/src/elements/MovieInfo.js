import styled from "styled-components";

export const MovieInfo = styled.div`
  background: white;
  text-align: center;
  padding: 2rem 10%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, auto) 5vh;
  grid-template-areas:
    " logo . title title  . poster"
    "prodname . overview overview  . release"
    "budget . . . . runtime"
    "revenue . voteAvg voteCount . .";

  > a {
    grid-area: poster;
  }
  > h1 {
    grid-area: title;
    align-self: center;
    font-family: "Ubuntu", sans-serif;
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #1d0d3d;
  }
  > .release {
    grid-area: release;
    align-self: start;
  }
  > .runtime {
    grid-area: runtime;
    align-self: center;
  }
  > .overview {
    grid-area: overview;
    font-size: 1.5rem;
    align-self: flex-start;
    text-align: justify;
    text-transform: uppercase;
  }
  > .logo {
    grid-area: logo;
    align-self: end;
  }
  > .voteAvg {
    grid-area: voteAvg;
    align-self: flex-start;
  }
  > .voteCount {
    grid-area: voteCount;
    align-self: flex-start;
  }
  > .prodname {
    grid-area: prodname;
    justify-self: start;
    align-self: start;
    color: "#0c0929";
  }
  > .budget {
    justify-self: start;
    grid-area: budget;
    align-self: start;
  }
  > .revenue {
    grid-area: revenue;
    justify-self: start;
    align-self: start;
  }
  > div {
    margin-right: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
  > .xtraInfo {
  }
`;

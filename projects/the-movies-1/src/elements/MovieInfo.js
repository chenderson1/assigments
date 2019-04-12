import styled from "styled-components";

export const MovieInfo = styled.div`
  background: white;
  text-align: center;
  padding: 2rem 10%;
  display: flex;
  flex-flow: row-reverse;
  justify-content: space-around;

  > div {
    margin-right: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;

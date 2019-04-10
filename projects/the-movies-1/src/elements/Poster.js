import styled from "styled-components";
import { below } from "../utilities";

export const Poster = styled.img`
  box-shadow: 0 0 30px 2px #050414;
  border-radius: 7px;
  margin-top: -8vh;
  margin-left: 3vw;
  ${below.xsmall`
    width: 200px;
  `}
`;

import styled from "styled-components";
import { below } from "../utilities";

export const Poster = styled.img`
  box-shadow: 0 0 30px 2px #050414;
  border-radius: 7px;
  &:hover {
    width: 180px;
  }

  ${below.xsmall`
    width: 200px;
    &:hover {
    width: 220px;
  }
  `}
`;

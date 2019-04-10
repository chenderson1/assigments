import styled from "styled-components";
import { below } from "../utilities";

export const UList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  max-width: 45vw;
  min-width: 45vw;
  margin-right: 1vw;
  justify-content: space-between;
  text-transform: uppercase;
  ${below.small`
    flex-flow: column;
    justify-content: center;
    align-items: center
  `}
`;

import styled from "styled-components";
import { below } from "../utilities";

export const StyledBtn = styled.button`
  background: #5b7c1a;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  min-width: 5vw;
  margin: 4vh 1vw;
  padding: 1px;
  border-radius: 10px;
  border: transparent;
  box-shadow: 0 0 10px black;
  cursor: pointer;
  ${below.xsmall`
  min-width: 9vw;
  max-width: 9vw;
  `}
`;
export const StyledSearchFirstBtn = styled(StyledBtn)`
  background: #0c0929;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  min-width: 5vw;
  margin: 4vh 1vw;
  padding: 1px;
  border-radius: 10px;
  border: transparent;
  box-shadow: 0 0 10px black;
  cursor: pointer;
  ${below.xsmall`
  min-width: 9vw;
  max-width: 9vw;
    
  `}
`;
export const StyledHomeBtn = styled(StyledBtn)`
  background-color: #710853;
  padding: 5px;
  color: white;
  &:hover {
    background-color: white;
    color: #710853;
  }
`;

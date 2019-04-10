import styled from "styled-components";
import { below } from "../utilities";

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 13vh;
  justify-items: center;
  margin-top: 15vh;
  ${below.med`
  grid-template-columns: repeat(2, 1fr);
  margin-left: 15vw;
  margin-right: 15vw;
  `}
  ${below.xsmall`
  grid-template-columns: repeat(1, 1fr);

  `}
`;

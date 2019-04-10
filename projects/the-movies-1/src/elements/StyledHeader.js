import styled from "styled-components";
import { below } from "../utilities";

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;
  ${below.small`
  flex-flow: column;
  justify-content: center;
  align-items: center;
  `}
`;

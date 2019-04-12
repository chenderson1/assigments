import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    background: white;
    padding: 2px;
    border-radius: 10px;
    color: #3b1a7c;
  }
`;

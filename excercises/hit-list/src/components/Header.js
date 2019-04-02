import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Banner>
      <img
        width="100px"
        height="100px"
        src={require("../resources/images/a9806c34-730a-4f32-94ad-75bbf28c2be9.png")}
        alt="#"
      />
      <p>Don Corleon's Hit List</p>{" "}
    </Banner>
  );
}
export default Header;

const Banner = styled.div`
  width: 100vw;
  background: #000;
  display: flex;
  align-items: center;
  > p {
    margin-left: 20px;
    color: red;
  }
`;

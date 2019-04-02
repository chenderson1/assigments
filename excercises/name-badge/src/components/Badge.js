import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 20px;
`;

const Badge = props => {
  return (
    <Wrapper>
      <span>Name: {`${props.firstName} ${props.lastName}`} </span>
      <span>Phone: {props.phone}</span>
      <br />
      <span>Place of birth: {props.birthPlace} </span>
      <span>fav food: {props.favFood}</span>
      <br />
      <span>Email: {props.email}</span>
      <br />
      <textarea>{props.desc}</textarea>
    </Wrapper>
  );
};

export default Badge;

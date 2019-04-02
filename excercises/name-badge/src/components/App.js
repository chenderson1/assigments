import React, { Component } from "react";
import styled from "styled-components";
import Form from "./Form";
import Badge from "./Badge";

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  * {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
  }
  height: 100vh;
  display: grid;
  justify-content: center;
  & form {
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

    /* grid-gap: 10px; */
    & input {
      width: 80%;
      margin-top: 25px;
      margin-left: 20px;
    }
    input:nth-child(even) {
      justify-self: end;
      margin-right: 20px;
    }
    textarea {
      grid-column: 1/-1;
      grid-row: 4/6;
      margin-left: 20px;
      margin-right: 20px;
    }
    button {
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 10px;
      grid-column: 1/-1;
      border-radius: 10px;
    }
  }
  & ul {
    list-style: none;
    display: flex;
    justify-items: center;
  }
`;

class App extends Component {
  state = {
    form: {},
    badges: []
  };

  handleSubmit = formObj => {
    this.setState(prev => {
      return {
        form: formObj,
        badges: [...prev.badges, formObj]
      };
    });
  };

  render() {
    const mappedBadges = this.state.badges.map((badge, i) => {
      return (
        <li key={badge.email + i}>
          <Badge
            firstName={badge.firstName}
            lastName={badge.lastName}
            email={badge.email}
            birthPlace={badge.birthPlace}
            phone={badge.phone}
            favFood={badge.favFood}
            desc={badge.desc}
          />
        </li>
      );
    });

    return (
      <Wrapper>
        <Form handleSubmit={this.handleSubmit} />
        <ul>{mappedBadges}</ul>
      </Wrapper>
    );
  }
}

export default App;

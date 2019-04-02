import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import HitList from "./HitList";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <Body>
        <Header />
        <Container>
          <HitList />
        </Container>
        <Footer />
      </Body>
    );
  }
}
export default App;

const Container = styled.div`
  width: 50vw;
  margin: 10vh auto;
`;
const Body = styled.div`
  background: #d6d6d6;
`;

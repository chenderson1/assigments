import React, { Component } from "react";
import axios from "axios";
import Hit from "./Hit";
import styled from "styled-components";

class HitList extends Component {
  state = {
    hitList: []
  };

  async componentDidMount() {
    const res = await axios.get(
      "https://s3.amazonaws.com/v-school/data/hitlist.json"
    );
    this.setState({ hitList: res.data });
  }

  render() {
    const { hitList } = this.state;
    const mappedHits = hitList.map(hit => {
      return <Hit key={hit.name + Math.floor(Math.random() * 10)} {...hit} />;
    });

    return <UList>{mappedHits}</UList>;
  }
}
export default HitList;

const UList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

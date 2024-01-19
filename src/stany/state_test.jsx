import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 0.5rem;
  background-color: gold;
  border: 1px solid #000;
  outline: transparent;
  color: #eeeddd;
  border-radius: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
`;
const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: firebrick;
  color: #eee;
  font-family: Arial, Helvetica, sans-serif;
  padding: 1rem;
`;

class NewClassComponents extends Component {
  constructor() {
    super();
    // Inicjowanie stanu w komponencie
    this.state = {
      count: 0,
      iteration: 1,
      text: "liczba",
    };
  }
  // Metody klasy pracujące na stanach
  updateCounter = () => {
    this.setState({
      count: this.state.count + 1,
      iteration: this.state.iteration + 10,
      text: this.state.count,
    });
    if (parseInt(this.state.count + 1) % 2 === 0) {
      this.setState({ text: "Parzysta" });
    } else {
      this.setState({ text: "Nieparzysta" });
    }
  };

  render() {
    return (
      <>
        <StyledDiv>
          <p>Aktualny licznik: {this.state.text}</p>
          <StyledButton
            onClick={() => {
              this.updateCounter();
            }}
          >
            Inkrementuj
          </StyledButton>
          <span>{this.state.count}</span>
        </StyledDiv>
      </>
    );
  }
}

export default NewClassComponents;

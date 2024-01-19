import React, { useState } from "react";
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

const NewComponent = () => {
  let [licznik, setLicznik] = useState(0);
  let [etykieta, setEtykieta] = useState("");

  function setText() {
    if (etykieta == "ZST Rzeszow") {
      setEtykieta("Programowanie");
    } else {
      setEtykieta("ZST Rzeszow");
    }
  }
  function setData() {
    console.log("Aktualny stan: " + licznik);
    setLicznik((licznik += 1));
    setText();
  }
  function removeData() {
    console.log("Aktualny stan: " + licznik);
    setLicznik((licznik -= 1));
    setText();
  }

  return (
    <>
      <StyledDiv>
        <p>Wartość licznika: {licznik}</p>
        <StyledButton onClick={setData}>Inkrementacja</StyledButton>
        <StyledButton onClick={removeData}>Dekrementacja</StyledButton>
        <p>Stan obiektu: </p>
        <p>{etykieta}</p>
      </StyledDiv>
    </>
  );
};

export default NewComponent;

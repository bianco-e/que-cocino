import React from "react";
import styled from "styled-components";
import ContributeForm from "../components/ContributeForm";

export default function Contribute() {
  return (
    <Wrapper>
      <ContributeForm />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  color: "#000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100vh",
});

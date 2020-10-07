import React from "react";
import styled from "styled-components";
export default function Input({
  label,
  onChange,
  onKeyDown = () => {},
  value,
}) {
  return (
    <Container>
      <Label>{label}</Label>
      <StyledInput
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
        value={value}
      />
    </Container>
  );
}

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "80%",
});
const Label = styled.h4({
  color: "#a2cc41",
  margin: "8px 0",
});
const StyledInput = styled.input({
  border: "2px solid #a2cc41",
  borderRadius: "2px",
  color: "#a2cc41",
  fontSize: "14px",
  padding: "5px",
  textAlign: "center",
  width: "100%",
});

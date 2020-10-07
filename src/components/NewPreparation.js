import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function NewPreparation({
  currentStep,
  lineNumber,
  setSteps,
  steps,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(currentStep);
  }, [currentStep]);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setSteps(steps.concat(value));
      setValue("");
    }
    if (e.keyCode === 8 && !value && lineNumber != 0) {
      setSteps(steps.filter((step, idx) => idx != lineNumber));
    }
  };
  return (
    <Container>
      <Text>{lineNumber > 0 ? lineNumber : ">"}</Text>
      <Line
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        value={value}
      />
    </Container>
  );
}

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  width: "99%",
});
const Line = styled.input({
  border: "0",
  fontSize: "12px",
  height: "15px",
  padding: "1px",
  width: "95%",
});
const Text = styled.span({
  color: "#a2cc41",
  fontSize: "11px",
});

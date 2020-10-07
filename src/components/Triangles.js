import React from "react";
import styled from "styled-components";

export default function Triangles({ n }) {
  return (
    <Container>
      {new Array(n).fill("").map(() => (
        <Triangle></Triangle>
      ))}
    </Container>
  );
}

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
});
const Triangle = styled.div({
  width: "0",
  height: "0",
  borderLeft: "25px solid transparent",
  borderRight: "25px solid transparent",
  borderTop: "320px solid rgba(162,204,65, 0.3)",
});

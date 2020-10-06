import React, { useState } from "react";
import styled from "styled-components";
import Title from "./components/Title";
import Header from "./components/Header";
import RecipeCard from "./components/RecipeCard";

export default function App() {
  const [recipe, setRecipe] = useState();

  const renderTriangles = () => {
    return new Array(26).fill("").map(() => <Triangle></Triangle>);
  };

  return (
    <Wrapper>
      <Title text="¿Qué cocino?" />
      <Header setRecipe={setRecipe} />
      <Container>{renderTriangles()}</Container>
      {recipe && <RecipeCard recipe={recipe} />}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  color: "#FFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  minHeight: "100vh",
  position: "relative",
});
const Triangle = styled.div({
  width: "0",
  height: "0",
  borderLeft: "25px solid transparent",
  borderRight: "25px solid transparent",
  borderTop: "320px solid rgba(162,204,65, 0.3)",
});
const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  width: "100%",
});

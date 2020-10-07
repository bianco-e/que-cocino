import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import Triangles from "../components/Triangles";

export default function App() {
  const [recipe, setRecipe] = useState();

  return (
    <Wrapper>
      <Title text="¿Qué cocino?" />
      <Header setRecipe={setRecipe} />
      <Triangles n={26} />
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

import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import IngredientsFilter from "./IngredientsFilter";

import { getRandomRecipe, getRecipeWithFilter } from "../api/apiQueries";

export default function Header({ setRecipe }) {
  const [havingIngredients, setHavingIngredients] = useState([]);
  const [notHavingIngredients, setNotHavingIngredients] = useState([]);

  const handleClick = () => {
    if (havingIngredients.length || notHavingIngredients.length) {
      console.log(havingIngredients, notHavingIngredients);
      return getRecipeWithFilter(
        havingIngredients,
        notHavingIngredients
      ).then((res) => setRecipe(res));
    }
    getRandomRecipe().then(([res]) => setRecipe(res));
  };

  return (
    <Wrapper>
      <IngredientsFilter
        title="Con"
        filteredIngredients={havingIngredients}
        setFilteredIngredients={setHavingIngredients}
      />
      <ButtonContainer>
        <Button text="Pedir receta" onClickFn={() => handleClick()} />
      </ButtonContainer>
      <IngredientsFilter
        title="Sin"
        filteredIngredients={notHavingIngredients}
        setFilteredIngredients={setNotHavingIngredients}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "flex-start",
  borderBottom: "4px solid #a2cc41",
  borderTop: "4px solid #a2cc41",
  display: "flex",
  justifyContent: "space-around",
  minHeight: "130px",
  width: "100%",
});
const ButtonContainer = styled.div({
  display: "grid",
  placeItems: "center",
  minHeight: "110px",
  width: "30%",
});

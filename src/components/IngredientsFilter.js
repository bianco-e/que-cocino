import React, { useEffect, useState } from "react";
import styled from "styled-components";

import IngredientCard from "./IngredientCard";
import IngredientsDropdown from "./IngredientsDropdown";

import { getMatchingIngredients } from "../api/apiQueries";

const findIngredientInArr = (array, ingredient) =>
  array.find(
    (existingIng) => existingIng.toLowerCase() == ingredient.toLowerCase()
  );

export default function IngredientsFilter({
  title,
  filteredIngredients,
  setFilteredIngredients,
}) {
  const [matchingIngredients, setMatchingIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  useEffect(() => {
    if (ingredient.length > 2) {
      getMatchingIngredients(ingredient).then((res) =>
        setMatchingIngredients(res)
      );
    } else setMatchingIngredients([]);
  }, [ingredient]);

  const deleteIngredient = (ingredient) =>
    setFilteredIngredients(
      filteredIngredients.filter((existingIng) => existingIng != ingredient)
    );

  const addIngredient = (ingredient) => {
    !findIngredientInArr(filteredIngredients, ingredient) &&
      setFilteredIngredients(filteredIngredients.concat(ingredient));
    setIngredient("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode == 13) {
      if (
        matchingIngredients.length == 1 &&
        !findIngredientInArr(filteredIngredients, matchingIngredients[0])
      )
        return addIngredient(matchingIngredients[0]);
      const matched = findIngredientInArr(matchingIngredients, ingredient);
      if (!findIngredientInArr(filteredIngredients, ingredient) && matched)
        return addIngredient(matched);
    }
  };

  const handleInputChange = (e) => setIngredient(e.target.value);

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <Input
          onKeyDown={(e) => handleKeyDown(e)}
          value={ingredient}
          onChange={(e) => handleInputChange(e)}
        />
        <IngredientsDropdown
          addIngredient={addIngredient}
          ingredients={matchingIngredients}
        />
      </Container>
      <FilteredIngredients>
        {filteredIngredients.map((ingredient) => (
          <IngredientCard
            key={ingredient}
            deleteIngredient={deleteIngredient}
            ingredient={ingredient}
          />
        ))}
      </FilteredIngredients>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "5px",
  width: "35%",
});
const Container = styled.div({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
});
const FilteredIngredients = styled.div({
  display: "flex",
  flexWrap: "wrap",
});
const Input = styled.input({
  background: "none",
  border: "2px solid #a2cc41",
  borderRadius: "2px",
  color: "#a2cc41",
  fontSize: "14px",
  padding: "5px",
  textAlign: "center",
  width: "80%",
});
const Title = styled.h4({
  color: "#a2cc41",
  margin: "8px 0",
});

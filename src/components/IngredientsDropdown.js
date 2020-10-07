import React from "react";
import styled from "styled-components";

export default function IngredientsDropdown({ addIngredient, ingredients }) {
  return (
    <Wrapper>
      {ingredients.map((ingredient, i) => {
        return (
          <Selector
            bg={i % 2 == 0 ? "#EEE" : "#DDD"}
            key={ingredient}
            onClick={() => addIngredient(ingredient)}
          >
            {ingredient}
          </Selector>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "absolute",
  top: "100%",
  width: "83%",
  zIndex: "5",
});
const Selector = styled.span({
  background: (props) => props.bg,
  color: "#222",
  cursor: "pointer",
  fontSize: "14px",
  padding: "2px",
  textAlign: "center",
  width: "100%",
  transition: "all .2 ease",
  ["&:hover"]: {
    background: "#a2cc41",
  },
});

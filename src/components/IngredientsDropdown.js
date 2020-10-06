import React from "react";
import styled from "styled-components";

export default function IngredientsDropdown({ addIngredient, ingredients }) {
  return (
    <Wrapper>
      {ingredients.slice(0, 4).map((ingredient, i) => {
        return (
          <Selector
            bgColor={i % 2 == 0 ? "#EEE" : "#a2cc41"}
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
  background: (props) => props.bgColor,
  color: "#222",
  cursor: "pointer",
  fontSize: "14px",
  padding: "2px",
  textAlign: "center",
  width: "100%",
  transition: "all .2 ease",
  ["&:hover"]: {
    background: "#DDD",
  },
});

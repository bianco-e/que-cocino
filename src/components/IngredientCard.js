import React from "react";
import styled from "styled-components";

export default function IngredientCard({ ingredient, deleteIngredient }) {
  return (
    <Card>
      <CloseButton onClick={() => deleteIngredient(ingredient)}>x</CloseButton>
      {ingredient}
    </Card>
  );
}

const Card = styled.span({
  background: "rgba(162,204,65, 0.1)",
  border: "1px solid #a2cc41",
  borderRadius: "2px",
  color: "#000",
  fontSize: "12px",
  margin: "2px 1px",
  padding: "3px 15px 3px 3px",
  position: "relative",
});
const CloseButton = styled.button({
  background: "none",
  border: "0",
  color: "#a2cc41",
  cursor: "pointer",
  fontSize: "12px",
  padding: "0",
  position: "absolute",
  top: "1px",
  right: "3px",
});

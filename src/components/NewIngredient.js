import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function AddIngredient({
  currentIngredient,
  empty,
  ingredients,
  setIngredients,
}) {
  const [currentName, setCurrentName] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState("");

  useEffect(() => {
    setCurrentName(currentIngredient.name);
    setCurrentQuantity(currentIngredient.quantity);
  }, [currentIngredient]);

  const addIngredient = () => {
    if (
      currentName &&
      currentQuantity &&
      !ingredients.find(({ name }) => name == currentName)
    ) {
      setIngredients(
        ingredients.concat({ name: currentName, quantity: currentQuantity })
      );
      setCurrentName("");
      setCurrentQuantity("");
    }
  };

  const deleteIngredient = () => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(({ name }) => name != currentName));
    }
  };

  return (
    <Container>
      <Input
        placeholder="Nombre"
        value={currentName}
        onChange={(e) => setCurrentName(e.target.value)}
      />
      <Input
        placeholder="Cantidad"
        value={currentQuantity}
        onChange={(e) => setCurrentQuantity(e.target.value)}
      />
      {empty && <Button onClick={() => addIngredient()}>+</Button>}
      {!empty && <Button onClick={() => deleteIngredient()}>x</Button>}
    </Container>
  );
}

const Container = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
});
const Input = styled.input({
  border: "2px solid #a2cc41",
  borderRadius: "2px",
  color: "#a2cc41",
  fontSize: "12px",
  padding: "5px",
  textAlign: "center",
  width: "40%",
});
const Button = styled.button({
  background: "none",
  border: "2px solid #a2cc41",
  borderRadius: "2px",
  color: "#a2cc41",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  cursor: "pointer",
  height: "29px",
  padding: "5px",
  width: "29px",
});

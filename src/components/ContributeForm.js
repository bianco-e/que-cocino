import React, { useState } from "react";
import styled from "styled-components";

import Input from "./Input";
import Button from "./Button";
import NewIngredient from "./NewIngredient";
import NewPreparation from "./NewPreparation";

import { postIngredients, postRecipe } from "../api/apiQueries";

const initialMode = {
  oven: false,
  pan: false,
  microwaves: false,
};

const emptyIngredient = { name: "", quantity: "" };

const filterEmptyPosition = (array) => array.slice(1);

export default function ContributeForm() {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState(initialMode);
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([emptyIngredient]);
  const [steps, setSteps] = useState([""]);

  const handleCheck = (cookingMode) =>
    setMode({ ...mode, [cookingMode]: !mode[cookingMode] });

  const addRecipe = () => {
    const filteredIngredients = filterEmptyPosition(ingredients);
    const recipe = {
      name,
      description: { time: parseInt(time), mode },
      image,
      ingredients: filteredIngredients,
      steps: filterEmptyPosition(steps),
    };
    const ingredientsNames = filteredIngredients.map(({ name }) => name);
    postIngredients(ingredientsNames);
    postRecipe(recipe);
  };

  return (
    <Wrapper>
      <Input
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Tiempo (minutos)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <Title>Modo de cocción</Title>
      <Container>
        {[
          { title: "Horno", value: "oven" },
          { title: "Hornalla", value: "pan" },
          { title: "Microondas", value: "microwaves" },
        ].map(({ title, value }) => (
          <Label key={title}>
            {title}
            <GenericInput type="checkbox" onChange={() => handleCheck(value)} />
          </Label>
        ))}
      </Container>
      <Input
        label="Imágen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Title>Ingredientes</Title>
      <IngredientsContainer>
        {ingredients.map((ingredient, idx) => (
          <NewIngredient
            empty={idx == 0 && true}
            currentIngredient={ingredient}
            key={ingredient.name}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
        ))}
      </IngredientsContainer>
      <Title>Preparación</Title>
      <PreparationContainer>
        {steps.map((step, idx) => (
          <NewPreparation
            currentStep={step}
            key={step + idx}
            lineNumber={idx}
            setSteps={setSteps}
            steps={steps}
          />
        ))}
      </PreparationContainer>
      <Button text="Agregar receta" onClickFn={() => addRecipe()} />
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "space-around",
});
const IngredientsContainer = styled.div({
  alignItem: "center",
  display: "flex",
  flexDirection: "column",
});
const PreparationContainer = styled.div({
  alignItems: "center",
  border: "1px solid #a2cc41",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "99%",
});
const Container = styled.div({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
});
const GenericInput = styled.input({
  cursor: "pointer",
});
const Label = styled.label({
  alignItems: "center",
  color: "#a2cc41",
  display: "flex",
  flexDirection: "column",
  fontSize: "12px",
});
const Title = styled.h4({
  color: "#a2cc41",
  margin: "8px 0",
});

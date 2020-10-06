import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ClockSvg from "../svg/ClockSvg";
import OvenSvg from "../svg/OvenSvg";
import PanSvg from "../svg/PanSvg";
import MicrowavesSvg from "../svg/MicrowavesSvg";
import Button from "../components/Button";

const svg = {
  oven: OvenSvg,
  pan: PanSvg,
  microwaves: MicrowavesSvg,
};

const getTrueValuesInObj = (object) =>
  Object.entries(object)
    .filter(([key, value]) => value == true)
    .map(([key, value]) => key);

export default function RecipeCard({ recipe }) {
  const [preparation, setPreparation] = useState([]);
  const { name, description, image, ingredients, steps } = recipe;

  useEffect(() => {
    setPreparation([]);
  }, [steps]);

  const renderPreparation = () =>
    preparation.map((step, i) => <Text key={step}>{`${i + 1}. ${step}`}</Text>);

  return (
    <Wrapper>
      {recipe.nomatches ? (
        <Text fSize="18px" fWeight="bold">
          No se encontraron recetas.
        </Text>
      ) : (
        <>
          <Container width="260px">
            {preparation.length ? (
              renderPreparation()
            ) : (
              <Container>
                <Image src={image} />
                <Button
                  onClickFn={() => setPreparation(steps)}
                  text="Ver preparación"
                  type="inverted"
                />
              </Container>
            )}
          </Container>
          <Container width="330px">
            <Title>{name}</Title>
            <IconsGroup>
              <IconContainer>
                <Text fWeight="bold">{description.time}'</Text>
                <Icon>
                  <ClockSvg width={20} />
                </Icon>
              </IconContainer>
              <Text>
                {getTrueValuesInObj(description.mode).map((elem) => {
                  const SVG = svg[elem];
                  return (
                    <Icon>
                      <SVG key={elem} width={20} />
                    </Icon>
                  );
                })}
              </Text>
            </IconsGroup>
            <IconsGroup>
              <List>
                {ingredients.map(({ name, quantity }) => (
                  <LI key={name}>
                    <Text fWeight="bold">{name}</Text>
                    <Text>{quantity}</Text>
                  </LI>
                ))}
              </List>
            </IconsGroup>
          </Container>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  background: "none",
  display: "flex",
  justifyContent: "space-around",
  minHeight: "350px",
  width: "45%",
  padding: "30px 0",
  position: "absolute",
  bottom: "0",
});
const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: (props) => props.width,
});
const IconsGroup = styled.div({
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  width: "100%",
});
const Icon = styled.div({
  display: "inline",
  padding: "0 5px",
});
const IconContainer = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
});
const Text = styled.p({
  color: "#222",
  fontSize: (props) => props.fSize || "14px",
  fontWeight: (props) => props.fWeight,
  margin: "3px 0",
  textAlign: "center",
});
const Title = styled.p({
  color: "#a2cc41",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "5px",
  textAlign: "center",
  textShadow: "1px 0 0 #222, -1px 0 0 #222, 0 1px 0 #222, 0 -1px 0 #222",
});
const Image = styled.img({
  marginBottom: "5px",
  width: "100%",
});
const List = styled.ul({
  alignItems: "flex-start",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  listStyleType: "none",
  padding: "0",
  width: "100%",
});
const LI = styled.li({
  width: "33%",
});

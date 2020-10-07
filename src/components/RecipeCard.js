import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Media from "react-media";

import Button from "../components/Button";
import ClockSvg from "../svg/ClockSvg";

import { getTrueValuesInObj, svg } from "../utils/utils";

export default function RecipeCard({ recipe }) {
  const [preparation, setPreparation] = useState([]);
  const { name, description, image, ingredients, steps } = recipe;

  useEffect(() => {
    setPreparation([]);
  }, [recipe]);

  const renderPreparation = () =>
    preparation.map((step, i) => (
      <Text onClick={() => setPreparation([])} key={step}>{`${
        i + 1
      }. ${step}`}</Text>
    ));

  const renderIcons = (mode) =>
    getTrueValuesInObj(mode).map((elem) => {
      const SVG = svg[elem];
      return (
        <Icon>
          <SVG key={elem} width={20} />
        </Icon>
      );
    });

  const renderListItems = (ingredients) =>
    ingredients.map(({ name, quantity }) => (
      <Item key={name}>
        <Text fWeight="bold">{name}</Text>
        <Text>{quantity.toUpperCase()}</Text>
      </Item>
    ));

  return (
    <>
      <Media queries={{ large: "(min-width: 1000px)" }}>
        {({ large }) => (
          <Fragment>
            <Wrapper
              fDir={!large ? "column-reverse" : "row"}
              width={!large ? "95%" : "45%"}
            >
              {recipe.nomatches ? (
                <Text fSize="18px" fWeight="bold">
                  No se encontraron recetas.
                </Text>
              ) : (
                <>
                  <Container width={!large ? "220px" : "260px"}>
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
                      <Text>{renderIcons(description.mode)}</Text>
                    </IconsGroup>
                    <List>{renderListItems(ingredients)}</List>
                  </Container>
                </>
              )}
            </Wrapper>
          </Fragment>
        )}
      </Media>
    </>
  );
}

const Wrapper = styled.div({
  alignItems: "center",
  background: "none",
  display: "flex",
  flexDirection: (props) => props.fDir,
  justifyContent: "space-around",
  width: (props) => props.width,
  position: "absolute",
  top: "200px",
});
const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "300px",
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
const Item = styled.li({
  width: "33%",
});

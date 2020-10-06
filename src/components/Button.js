import React from "react";
import styled from "styled-components";

const style = {
  normal: {
    color: {
      normal: "#a2cc41",
      hover: "#FFF",
    },
    bg: {
      normal: "#FFF",
      hover: "#a2cc41",
    },
  },
  inverted: {
    color: {
      normal: "#FFF",
      hover: "#a2cc41",
    },
    bg: {
      normal: "#a2cc41",
      hover: "#FFF",
    },
  },
};

export default function Button({ onClickFn, text, type = "normal" }) {
  return (
    <StyledButton
      bg={style[type].bg.normal}
      bgHover={style[type].bg.hover}
      color={style[type].color.normal}
      colorHover={style[type].color.hover}
      onClick={() => onClickFn()}
      title={text}
    >
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button({
  background: (props) => props.bg,
  border: "2px solid rgb(162,204,65)",
  color: (props) => props.color,
  cursor: "pointer",
  borderRadius: "2px",
  padding: "10px",
  transition: "all 0.4s ease",
  width: "100%",
  ["&:hover"]: {
    background: (props) => props.bgHover,
    color: (props) => props.colorHover,
  },
});

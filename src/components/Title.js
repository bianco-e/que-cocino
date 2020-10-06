import React from "react";
import styled from "styled-components";

export default function Title({ text }) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div({
  backgroundImage:
    "url(https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  width: "100%",
  textAlign: "center",
});
const Text = styled.h1({
  color: "rgba(255, 255, 255, 0.8)",
  margin: "10px 0",
  textShadow:
    "1px 0 0 #a2cc41, -1px 0 0 #a2cc41, 0 1px 0 #a2cc41, 0 -1px 0 #a2cc41",
});

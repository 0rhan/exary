import React from "react";
import styled from "styled-components";

function ButtonLabel({ children }) {
  return <Label> {children} </Label>;
}

export default ButtonLabel;

const Label = styled.span`
  display: flex;
  justify-content: inherit;
  align-items: inherit;
  text-align: center;
  box-sizing: inherit;
  width: 100%;
  color: inherit;
`;

import React from "react";
import styled from "styled-components";

function ButtonLabel({ children, className }) {
  return <Label className={className}> {children} </Label>;
}

export default ButtonLabel;

const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

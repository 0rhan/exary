import React from "react";
import styled from "styled-components";
import BaseContainer from "UI/Components/Layout/Container/BaseContainer"

const InputContainer = ({ children, className }) => (
  <Container className={className}>{children}</Container>
);

export default InputContainer;

const Container = styled(BaseContainer)`
  margin-top: 20px;
  flex-direction: column;
  position: relative;
  max-width: 240px;
`;

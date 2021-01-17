import React from "react";
import styled from "styled-components";
import BaseContainer from "Components/UI/Layout/Container/BaseContainer";

const InputContainer = ({children}) => <Container>{children}</Container>;

export default InputContainer;

const Container = styled(BaseContainer)`
  margin-top: 20px;
  flex-direction: column;
  position: relative;
  width: max-content;
`;

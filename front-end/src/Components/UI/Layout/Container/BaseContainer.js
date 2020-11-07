import React from "react";
import styled from "styled-components";

export default ({ children, className, onClick }) => (
  <BaseContainer className={className} onClick={onClick}>
    {children}
  </BaseContainer>
);

const BaseContainer = styled.div`
  display: flex;
  color: inherit;
  background-color: inherit;
`;

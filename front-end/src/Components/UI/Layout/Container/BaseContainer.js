import React from "react";
import styled from "styled-components";

export default ({ children, className }) => (
  <BaseContainer className={className}>{children}</BaseContainer>
);

const BaseContainer = styled.div`
  display: flex;
  color: inherit;
  background-color: inherit;
`;

import React from "react";
import styled from "styled-components";

const Option = ({ props, children }) => (
  <OptionComponent {...props}>{children}</OptionComponent>
);

export default Option;

const OptionComponent = styled.option`
  color: ${({ theme }) => theme.light.bg};
  background-color: ${({ theme }) => theme.light.fg};
`;

import React from "react";
import FullWidthContainer from "Components/UI/Layout/Container/FullWidthContainer";
import styled from "styled-components";

const ModalBody = ({ children }) => {
  return (<Body>{children}</Body>);
};

export default ModalBody;

const Body = styled(FullWidthContainer)`
  border: 4px double ${({ theme }) => theme.light.fg};
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
`;


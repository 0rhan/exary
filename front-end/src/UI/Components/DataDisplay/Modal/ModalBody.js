import React from "react";
import FullWidthContainer from "UI/Components/Layout/Container/FullWidthContainer"
import styled from "styled-components";

const ModalBody = ({ children }) => {
  return <Body>{children}</Body>;
};

export default ModalBody;

const Body = styled(FullWidthContainer)`
  border: 6px double ${({ theme }) => theme.light.fg};
  box-sizing: border-box;
  flex-direction: column;
  min-height: 240px;
  padding: 24px 21px 14px;
  align-items: center;
  justify-content: center;
`;


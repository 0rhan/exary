import React from "react";
import styled from "styled-components";

const CardHeader = ({ children, className }) => {
  return (
    <>
      <StyledCardHeader className={className}>{children}</StyledCardHeader>
      <HeaderDivider />
    </>
  );
};

export default CardHeader;

const StyledCardHeader = styled.div`
  background-color: ${({ theme }) => theme.light.fg};
  color: ${({ theme }) => theme.light.bg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 0px double ${({ theme }) => theme.light.bg};
  border-radius: 0px;
  h3 {
    margin: 0px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 10px;
  }
`;

const HeaderDivider = styled.div`
  border-bottom: 6px double ${({ theme }) => theme.light.fg};
  border-radius: 0px;
`;

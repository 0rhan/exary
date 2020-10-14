import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationLinkBase = ({ to, children, className }) => {
  return (
    <StyledRouterLink className={className} to={to}>
      {children}
    </StyledRouterLink>
  );
};

export default NavigationLinkBase;

const StyledRouterLink = styled(Link)`
  display: flex;
  align-items: center;
  height: inherit;
  text-decoration: none;
  color: inherit;
  &:visited {
    color: unset;
  }
`;

import React from "react";
import styled from "styled-components";
import BaseContainer from "./BaseContainer"

export default ({ children, className }) => {
  return <FullWidthContainer className={className}>{children}</FullWidthContainer>;
}


const FullWidthContainer = styled(BaseContainer)`
  width: 100%;
`;

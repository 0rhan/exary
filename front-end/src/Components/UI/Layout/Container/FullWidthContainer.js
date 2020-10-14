import React from "react";
import styled from "styled-components";
import BaseContainer from "Components/UI/Layout/Container/BaseContainer";

export default ({ children, className }) => {
  return <FullWidthContainer className={className}>{children}</FullWidthContainer>;
}


const FullWidthContainer = styled(BaseContainer)`
  width: 100%;
`;

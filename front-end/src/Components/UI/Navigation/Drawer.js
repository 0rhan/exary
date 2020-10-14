import React from "react";
import styled from "styled-components";
import BaseContainer from "Components/UI/Layout/Container/BaseContainer";

export default ({ className, children, toggleState }) => {
  return (
    <DrawerContainer className={className} toggleState={toggleState}>
      {children}
    </DrawerContainer>
  );
};

// rename container
const DrawerContainer = styled(BaseContainer)`
  height: 100%;
  width: 240px;
  flex: 0 0 auto;
  margin-left: ${({ toggleState }) => (toggleState ? "0" : "-240px")};
  transition: margin 0.2s linear;
`;

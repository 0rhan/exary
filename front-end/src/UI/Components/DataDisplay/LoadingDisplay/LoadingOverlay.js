import React from "react";
import styled from "styled-components";

const LoadingOverlay = ({ children }) => {
  return <Overlay>{children}</Overlay>;
};

export default LoadingOverlay;

const Overlay = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 10;
  justify-content: center;
  align-items: center;
  backdrop-filter: brightness(0.3);
`;

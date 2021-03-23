import React from "react";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import styled from "styled-components";

const LoadingPending = ({ pendingText }) => {
  return (
    <>
      <LoadingIcon />
      <LoadingText>{pendingText}</LoadingText>
    </>
  );
};

export default LoadingPending;

const LoadingText = styled.p`
  color: ${({ theme }) => theme.light.bg};
`;

const LoadingIcon = styled(HourglassEmptyIcon)`
  && {
    width: 40px;
    height: 40px;
  }

  animation: 1.5s infinite spin;

  @keyframes spin {
    0% {
      transform-origin: center;
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

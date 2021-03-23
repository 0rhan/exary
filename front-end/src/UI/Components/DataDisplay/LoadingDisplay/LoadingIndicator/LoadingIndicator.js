import React, { useEffect, useState } from "react";
import LoadingPending from "./LoadingPending";
import LoadingSucceeded from "./LoadingSucceeded";
import LoadingFailed from "./LoadingFailed";
import { PENDING, FAILED, SUCCEEDED } from "State/Redux/Thunks/Constants/RequestStates";
import styled from "styled-components";

const LoadingIndicator = ({
  loadingState,
  pendingText = PENDING,
  succeededText = SUCCEEDED,
  failedText = FAILED,
}) => {
  const [indicatorState, setIndicatorState] = useState(loadingState);

  useEffect(() => {
    let timerID;

    const delayIndicatorChange = () => {
      timerID = setTimeout(() => setIndicatorState(loadingState), 1000);
    };

    delayIndicatorChange();

    return () => clearTimeout(timerID);
  }, [loadingState]);

  return (
    <Container>
      {indicatorState === PENDING && (
        <LoadingPending pendingText={pendingText} />
      )}
      {indicatorState === SUCCEEDED && (
        <LoadingSucceeded succeededText={succeededText} />
      )}
      {indicatorState === FAILED && <LoadingFailed failedText={failedText} />}
    </Container>
  );
};

export default LoadingIndicator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.light.bg};
  background-color: ${({ theme }) => theme.light.fg};
  width: 200px;
  height: 100px;
  padding: 5px;
`;

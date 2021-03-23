import { PENDING, SUCCEEDED } from "State/Redux/Thunks/Constants/RequestStates";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator";
import LoadingOverlay from "./LoadingOverlay";

const LoadingDisplay = ({ loadingState, loadingText }) => {

  const [renderOverlay, setRenderState] = useState(false);

  const isPending = loadingState === PENDING;
  const isSucceeded = loadingState === SUCCEEDED;

  useEffect(() => {
    let fadeTimerID

    if (isPending) setRenderState(true);

    if (isSucceeded) fadeTimerID = setTimeout(() => setRenderState(false), 2000);

    return () => clearTimeout(fadeTimerID)

  }, [isPending, isSucceeded]);


  return (
    <>
      {renderOverlay && (
        <LoadingOverlay>
          <LoadingIndicator loadingState={loadingState} {...loadingText}/>
        </LoadingOverlay>
      )}
    </>
  );
};

export default LoadingDisplay;

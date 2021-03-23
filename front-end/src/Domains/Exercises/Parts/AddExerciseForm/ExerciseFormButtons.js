import React from "react";
import SubmitButton from "UI/Components/Controls/Buttons/SubmitButton";
import ResetButton from "UI/Components/Controls/Buttons/ResetButton";
import FullWidthContainer from "UI/Components/Layout/Container/FullWidthContainer"
import styled from "styled-components";
import { useFormikContext } from "formik";

const ExerciseFormControls = () => {
  const { isValid, handleReset } = useFormikContext();

  return (
    <ControlsContainer>
      <ResetButton onClick={handleReset}>Clear fields</ResetButton>
      <SubmitButton disabled={!isValid}> Create Exercise</SubmitButton>
    </ControlsContainer>
  );
};

export default ExerciseFormControls;

const ControlsContainer = styled(FullWidthContainer)`
  margin-top: 20px;
  justify-content: space-evenly;
`;

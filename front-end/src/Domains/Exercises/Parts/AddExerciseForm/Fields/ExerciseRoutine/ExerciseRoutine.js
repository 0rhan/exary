import React from "react";
import ExerciseRepsField from "./ExerciseRepsField";
import ExercisesSetsField from "./ExerciseSetsField";
import FullWidthContainer from "UI/Components/Layout/Container/FullWidthContainer"
import styled from "styled-components";

const ExercisesRoutine = () => {
  return (
    <RoutineFieldsContainer>
      <ExercisesSetsField />
      <ExerciseRepsField />
    </RoutineFieldsContainer>
  );
};

export default ExercisesRoutine;

const RoutineFieldsContainer = styled(FullWidthContainer)`
  justify-content: space-evenly;
`;

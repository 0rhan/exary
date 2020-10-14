import React from "react";
import FullWidthContainer from "Components/UI/Layout/Container/FullWidthContainer";
import FloatingButton from "Components/UI/Inputs/FloatingButton";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import PreviewCard from "Components/UI/DataDisplay/Card/PreviewCard";

let content = [];

for (let i = 0; i < 20; i++) {
  const container = <PreviewCard key={i}>Exercise №{i}</PreviewCard>;

  content.push(container);
}

function Exercises() {
  return (
    <ExercisesContainer>
      {content}
      <AddExerciseButton icon={AddIcon} />
    </ExercisesContainer>
  );
}

export default Exercises;

const AddExerciseButton = styled(FloatingButton)`
  position: absolute;
  right: 34px;
  bottom: 13px;
`;

const ExercisesContainer = styled(FullWidthContainer)`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  padding-bottom :100px;
`

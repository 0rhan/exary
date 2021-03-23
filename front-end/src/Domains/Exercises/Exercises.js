import React, { useEffect } from "react";
import FullWidthContainer from "UI/Components/Layout/Container/FullWidthContainer"
import FloatingButton from "UI/Components/Controls/Buttons/FloatingButton"
import AddIcon from "@material-ui/icons/Add";
import ExercisesList from "./Parts/ExercisesList/ExercisesList";
import ExerciseAddingModal from "./Parts/ExerciseAddingModal/ExerciseAddingModal"
import styled from "styled-components";

function Exercises({
  toggleModal,
  fetchExercisesList,
  deleteExercise,
  exercisesList,
}) {

  useEffect(() => {
    fetchExercisesList();
  }, [fetchExercisesList]);

  return (
    <>
      <ExercisesContainer>
        <ExerciseAddingModal/>
        <ExercisesList exercisesList={exercisesList} deleteExercise={deleteExercise}/>
        <AddExerciseButton
          icon={AddIcon}
          onClick={() => toggleModal(true)}
        />
      </ExercisesContainer>
    </>
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
  padding-bottom: 100px;
`;

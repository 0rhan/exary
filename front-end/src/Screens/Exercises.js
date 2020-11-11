import React from "react";
import FullWidthContainer from "Components/UI/Layout/Container/FullWidthContainer";
import FloatingButton from "Components/UI/Inputs/FloatingButton";
import AddIcon from "@material-ui/icons/Add";
import styled from "styled-components";
import PreviewCard from "Components/UI/DataDisplay/Card/PreviewCard";
import Modal from "Components/UI/DataDisplay/Modal/Modal";
import {OPEN_BOOL, CLOSE_BOOL} from "Constants/UI/UIActions"

let content = [];

for (let i = 0; i < 20; i++) {
  const container = <PreviewCard key={i}>Exercise №{i}</PreviewCard>;

  content.push(container);
}


function Exercises({ toggleModal, modalIsOpen }) {
  return (
    <>
      {modalIsOpen && (
        <Modal
          label="Add exercise"
          modalIsOpen={modalIsOpen}
          onClick={() => toggleModal(CLOSE_BOOL)}
        >
          <p>test</p> 
        </Modal>
      )}
      <ExercisesContainer>
        {content}
        <AddExerciseButton icon={AddIcon} onClick={() => toggleModal(OPEN_BOOL)} />
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

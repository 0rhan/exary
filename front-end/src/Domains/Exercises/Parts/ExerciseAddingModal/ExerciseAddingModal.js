import React from "react";
import AddExerciseForm from "Domains/Exercises/Parts/AddExerciseForm/AddExerciseForm";
import Modal from "UI/Components/DataDisplay/Modal/Modal";
import { toggleModal } from "State/Redux/Slices/UISlice";
import { connect } from "react-redux";
import LoadingDisplay from "UI/Components/DataDisplay/LoadingDisplay/LoadingDisplay";

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.UI.modalIsOpen,
    exercisesFetchStatus: state.exercises.exercisesFetchStatus
  };
};
const mapDispatchToProps = {
  toggleModal,
};

const ExerciseAddingModal = ({ modalIsOpen, toggleModal, exercisesFetchStatus }) => {
  return (
    <>
      {modalIsOpen && (
        <Modal
          label="Add exercise"
          modalIsOpen={modalIsOpen}
          onClick={() => toggleModal(false)}
        >
          <LoadingDisplay loadingState={exercisesFetchStatus}/>
          <AddExerciseForm />
        </Modal>
      )}
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExerciseAddingModal);

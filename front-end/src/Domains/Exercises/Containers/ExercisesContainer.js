import React from "react";
import Exercises from "Domains/Exercises/Exercises";
import { connect } from "react-redux";
import {
  fetchExercisesList,
  deleteExercise,
} from "State/Redux/Thunks/ExercisesDataRequests";
import { toggleModal } from "State/Redux/Slices/UISlice";

const mapStateToProps = (state) => {
  return {
    exercisesList: state.exercises.exercisesList,
  };
};

const mapDispatchToProps = {
  fetchExercisesList,
  toggleModal,
  deleteExercise,
};

function ExercisesContainer(props) {
  return <Exercises {...props} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer);

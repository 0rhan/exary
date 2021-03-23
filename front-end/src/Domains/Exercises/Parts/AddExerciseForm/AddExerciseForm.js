import React from "react";
import { Formik, Form } from "formik";
import Fields from "./Fields/Fields";
import ExerciseFormButtons from "./ExerciseFormButtons";
import { sendExerciseData } from "State/Redux/Thunks/ExercisesDataRequests";
import { connect } from "react-redux";
import styled from "styled-components";

const mapDispatchToProps = {
  sendExerciseData,
};

const AddExerciseForm = ({ sendExerciseData}) => {
  const submitHandler = ({
    exerciseName,
    exerciseSets,
    exerciseMuscleGroup,
    exerciseReps,
  }) => {
    const formattedValues = {
      name: exerciseName,
      muscleGroup: exerciseMuscleGroup,
      sets: exerciseSets,
      reps: exerciseReps,
    };

    sendExerciseData(formattedValues);
  };

  return (
    <Formik
      initialValues={{
        exerciseName: "",
        exerciseMuscleGroup: "",
        exerciseSets: 1,
        exerciseReps: 1,
      }}
      initialErrors={{
        exerciseName: "This field is required",
        exerciseMuscleGroup: "This field is required",
      }}
      onSubmit={(values) => submitHandler(values)}
    >
      <FormContainer>
        <Fields />
        <ExerciseFormButtons />
      </FormContainer>
    </Formik>
  );
};

export default connect(null, mapDispatchToProps)(AddExerciseForm);

const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

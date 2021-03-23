import React from "react";
import TextField from "UI/Components/Controls/FormControls/TextField"
import validateExerciseName from "./exerciseNameValidation";

const ExerciseNameField = (props) => {
  return (
    <TextField
      label="Exercise name"
      name="exerciseName"
      required={true}
      labelUppercase={true}
      labelStyle="leftEdge"
      labelPosition="left"
      placeholder="e.g. Squats"
      validate={validateExerciseName}
      {...props}
    />
  );
};

export default ExerciseNameField;

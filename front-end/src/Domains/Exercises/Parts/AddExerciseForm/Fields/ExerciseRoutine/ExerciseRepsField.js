
import React from "react";
import NumberField from "UI/Components/Controls/FormControls/NumberField"
import validateRoutine from "./exerciseRoutineValidation";

const ExerciseRepsFields = (props) => {
  return (
    <NumberField
      name="exerciseReps"
      label="Exercise reps"
      labelPosition="left"
      placeholder="3"
      min={1}
      validate={validateRoutine}
      {...props}
    />
  );
};

export default ExerciseRepsFields;

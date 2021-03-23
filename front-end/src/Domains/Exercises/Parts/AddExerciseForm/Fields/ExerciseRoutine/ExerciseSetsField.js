import React from "react";
import NumberField from "UI/Components/Controls/FormControls/NumberField"
import validateRoutine from "./exerciseRoutineValidation";

const ExerciseSetsFields = (props) => {
  return (
    <NumberField
      name="exerciseSets"
      label="Exercise sets"
      labelPosition="left"
      placeholder="3"
      min={1}
      validate={validateRoutine}
      {...props}
    />
  );
};

export default ExerciseSetsFields;

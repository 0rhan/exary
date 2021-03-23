import React from "react";
import ExerciseNameField from "./ExerciseNameField/ExerciseNameField";
import ExerciseRoutine from "./ExerciseRoutine/ExerciseRoutine";
import ExerciseMuscleGroupSelector from "./ExerciseMuscleGroupSelector/ExerciseMuscleGroupSelector";

const Fields = () => {
  return (
    <>
      <ExerciseNameField />
      <ExerciseMuscleGroupSelector />
      <ExerciseRoutine />
    </>
  );
};

export default Fields;

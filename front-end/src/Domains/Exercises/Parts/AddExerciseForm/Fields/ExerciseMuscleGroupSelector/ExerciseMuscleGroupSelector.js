import React from "react";
import Select from "UI/Components/Controls/FormControls/Select/Select";
import Option from "UI/Components/Controls/FormControls/Select/Option";

const validate = (value) => {
  let errorMessage;

  const valueIsEmpty = !value;

  const valueNotSelected = value === "Select group";

  if (valueIsEmpty || valueNotSelected) {
    errorMessage = "Must select muscle group";
  }

  return errorMessage;
};

const ExerciseMuscleGroupSelector = () => {
  return (
    <Select
      label="Muscle group"
      labelStyle="leftEdge"
      name="exerciseMuscleGroup"
      validate={validate}
      required={true}
    >
      <Option value="">Select group</Option>
      <Option value="Biceps">Biceps</Option>
      <Option value="Triceps">Triceps</Option>
      <Option value="ABS">ABS</Option>
    </Select>
  );
};

export default ExerciseMuscleGroupSelector;



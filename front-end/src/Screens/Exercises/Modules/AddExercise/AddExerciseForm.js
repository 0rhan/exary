import React from "react";
import { Formik } from "formik";
import TextField from "Components/UI/Inputs/TextField";
import NumberField from "Components/UI/Inputs/NumberField";
import  Select from "Components/UI/Inputs/Select/Select"
import Option from "Components/UI/Inputs/Select/Otion"
import Checkbox from "Components/UI/Inputs/Checkbox";
import FullWidthContainer from "Components/UI/Layout/Container/FullWidthContainer";
import styled from "styled-components";

const AddExerciseForm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        input2: "",
        input3: "",
        mys: false,
        numbers: 10,
        selectInput: "",
      }}
    >
      <FormContainer>
        <TextField
          label="test"
          name="name"
          labelUppercase={true}
          labelStyle="left edge"
          labelPosition="left"
          placeholder="Exercise name"
        />
        <TextField
          name="input2"
          label="Test other name"
          labelStyle="right edge"
          labelPosition="right"
          labelUppercase={true}
          required={true}
          placeholder="Other name"
        />
        <TextField
          name="input3"
          label="Test other name"
          labelStyle="both edges"
          labelUppercase={true}
          required={true}
          placeholder="Other name"
        />
        <NumberField
          name="numbers"
          label="Testing number field"
          labelStyle="both edges"
          labelPosition="left"
          placeholder="200"
          min={0}
        />
        <Checkbox label="This is checkbox" name="mys" />
        <Checkbox label="This is checkbox" name="mys" />
        <Select name="selectInput" label="testing select"  labelStyle="skewed left">
          <Option value="">Select Item</Option>
          <Option value="Бицепс">Бицепс</Option>
          <Option value="Трицепс">Трицепс</Option>
          <Option value="Пресс">Пресс</Option>
          <Option value="Брейн">Брейн</Option>
        </Select>
      </FormContainer>
    </Formik>
  );
};

export default AddExerciseForm;

const FormContainer = styled(FullWidthContainer)`
  flex-direction: column;
  align-items: center;
`;

import React from "react";
import { useField } from "formik";
import styled from "styled-components";
import InputLabel from "../InputBase/InputLabel/InputLabel";
import InputContainer from "../InputBase/InputContainer";
import InputErrorMessage from "../InputBase/InputErrorMessage";

const Select = (props) => {

  const [field, meta] = useField({
    ...props,
  });


  const {label, children, name} = props

  const error = Boolean(meta.error);

  const { touched, value } = meta;


  return (
    <StyledInputContainer>
      <InputLabel
        errorMessage={meta.error}
        error={error}
        touched={touched}
        value={value}
        {...props}
      >
        {label}
      </InputLabel>
      <SelectComponent
        {...field}
        {...props}
      >
        {children}
      </SelectComponent>
      <InputErrorMessage fieldName={name} touched={touched} error={error}/>
    </StyledInputContainer>
  );
};

export default Select;

const StyledInputContainer = styled(InputContainer)`
  label {
    background-color: ${({ theme }) => theme.light.fgFaded};
  }
  &:active {
    label {
      background-color: ${({ theme }) => theme.light.fg};
    }
  }
`;

const SelectComponent = styled.select`
  background-color: ${({ theme }) => theme.light.bg};
  color: ${({ theme }) => theme.light.fg};
  border-color: ${({ theme }) => theme.light.fg};
  border-radius: 0px;
  outline: none;
  appearance: none;
  user-select: none;
  cursor: pointer;
`;


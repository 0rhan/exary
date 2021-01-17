import React, { useState } from "react";
import { useField } from "formik";
import styled from "styled-components";
import InputLabel from "../InputLabel/InputLabel";
import InputContainer from "../InputBase/InputContainer";

const Select = ({ children, label, ...props }) => {
  const [field, meta] = useField({
    ...props,
  });

  console.log(field);
  const error = Boolean(meta.error);

  return (
    <InputContainer>
      <InputLabel errorMessage={meta.error} error={error} {...props}>
        {label}
      </InputLabel>
      <SelectComponent {...field}>{children}</SelectComponent>
    </InputContainer>
  );
};

export default Select;

const SelectComponent = styled.select`
  background-color: ${({ theme }) => theme.light.bg};
  color: ${({ theme }) => theme.light.fg};
  border-color: ${({ theme }) => theme.light.fg};
  outline: none;
  appearance: none;
  user-select: none;
  }
`;

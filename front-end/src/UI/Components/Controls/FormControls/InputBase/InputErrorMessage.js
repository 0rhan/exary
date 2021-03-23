import React from "react";
import styled from "styled-components";
import { ErrorMessage } from "formik";

const InputErrorMessage = ({ fieldName, touched, error, focus, className }) => {
  const showError = touched && error;

  return (
    showError && (
      <ErrorMessageContainer focus={focus} className={className}>
        <ErrorMessage name={fieldName} />
      </ErrorMessageContainer>
    )
  );
};

export default InputErrorMessage;

const ErrorMessageContainer = styled.div`
  background-color: ${({ theme, focus }) =>
    focus ? theme.light.fg : theme.light.fgFaded};
  color: red;
  padding: 0px 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

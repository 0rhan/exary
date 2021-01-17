import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ARRAY_OF_ALLOWED_INPUT_TYPES } from "./InputConstants";

const InputBase = ({ required = false, disabled = false, ...otherProps }) => {
  return <Input disabled={disabled} required={required} {...otherProps} />;
};

InputBase.propTypes = {
  // type of input
  type: PropTypes.oneOf(ARRAY_OF_ALLOWED_INPUT_TYPES).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default InputBase;

const Input = styled.input`
  background-color: ${({ theme }) => theme.light.bgFaded};
  color: ${({ theme }) => theme.light.fg};
  height: 44px;
  width: 240px;
  padding: 5px;
  border-radius: 0px;
  box-sizing: border-box;
  border-style: solid;
  border-color: ${({ theme }) => theme.light.fgFaded};
  &:focus {
    background-color: ${({ theme }) => theme.light.bg};
    border-color: ${({ theme }) => theme.light.fg};
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.light.fgFaded};
  }
  &:disabled {
    cursor: not-allowed;
    background: repeating-linear-gradient(
      -45deg,
      #292f1a 1px,
      transparent 4px,
      #292f1a 6px
    );
  }
`;

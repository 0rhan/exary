import React from "react";
import Label from "Components/UI/DataDisplay/Label/Label";
import LabelIndicator from "./LabelIndicator";
import styled from "styled-components";
import PropTypes from "prop-types";

// TODO: Add htmlFor in propTypes
const InputLabel = ({
  error,
  name,
  id,
  labelUppercase,
  labelPosition,
  labelStyle,
  required,
  disabled,
  focus,
  isValid,
  children,
}) => {
  // label without indicator
  const showIndicator = disabled && error && required;

  // select label style
  return (
    <StyledInputLabel
      htmlFor={name || id}
      error={error}
      disabled={disabled}
      labelPosition={labelPosition}
      focus={focus}
      showIndicator={showIndicator}
      labelUppercase={labelUppercase}
      labelStyle={labelStyle}
    >
      {children}
      <LabelIndicator
        required={required}
        error={error}
        disabled={disabled}
        isValid={isValid}
      />
    </StyledInputLabel>
  );
};

InputLabel.defaultProps = {
  focus: true,
};

InputLabel.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  labelPosition: PropTypes.oneOf(["left", "center", "right"]),
  labelEdged: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  isValid: PropTypes.bool,
};

export default InputLabel;

const StyledInputLabel = styled(Label)`
  color: ${({ disabled, theme }) =>
    disabled ? theme.light.bgFaded : theme.light.bg};
  background-color: ${({ theme, focus }) =>
    focus ? theme.light.fg : theme.light.fgFaded};
`;

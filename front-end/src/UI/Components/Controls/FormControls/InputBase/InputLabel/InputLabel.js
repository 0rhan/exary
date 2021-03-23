import React from "react";
import Label from "UI/Components/DataDisplay/Label/Label";
import LabelIndicator from "./LabelIndicator/LabelIndicator";
import styled from "styled-components";
import PropTypes from "prop-types";

const InputLabel = ({
  error,
  errorMessage,
  name,
  id,
  labelUppercase,
  labelPosition,
  labelStyle,
  required,
  disabled,
  focus,
  children,
  touched,
  value,
  className,
}) => {

  return (
    <StyledLabel
      htmlFor={name || id}
      error={error && touched}
      disabled={disabled}
      labelPosition={labelPosition}
      focus={focus}
      labelUppercase={labelUppercase}
      labelStyle={labelStyle}
      className={className}
    >
      <LabelText>{children}</LabelText>
      <LabelIndicator
        required={required}
        error={error}
        errorMessage={errorMessage}
        disabled={disabled}
        touched={touched}
        value={value}
      />
    </StyledLabel>
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
  touched: PropTypes.bool,
};

export default InputLabel;

const StyledLabel = styled(Label)`
  background-color: ${({ theme, focus }) =>
    focus ? theme.light.fg : theme.light.fgFaded};
`;

const LabelText = styled.span`
  color: ${({ disabled, theme }) =>
    disabled ? theme.light.bgFaded : theme.light.bg};
  padding-right: 4px;
`;

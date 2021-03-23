import React, { useState, useEffect } from "react";
import defaultTitles from "./defaultTitles";
import labelIndicatorVariants from "./IndicatorVariants/labelIndicatorVariants";

const LabelIndicator = ({
  required,
  error,
  disabled,
  title,
  errorMessage,
  touched,
  value,
}) => {
  const valueIsNotEmpty = Boolean(value) === true;

  // True if input have error and unfocused after first change
  const inputHaveError = error && touched;

  // True if input value not empty and input don't have error
  const inputIsValid = valueIsNotEmpty && !error && !disabled;

  // Show indicator if input is required and dont have errors
  const inputRequired = required && !disabled && !inputHaveError;

  // Dynamically set LabelIndicator component depending on props (input field state)
  const [fieldState, setFieldState] = useState(false);

  useEffect(() => {
    if (disabled) setFieldState("disabled");
    if (inputRequired) setFieldState("required");
    if (inputHaveError) setFieldState("error");
    if (inputIsValid) setFieldState("valid");
  }, [inputHaveError, inputIsValid, inputRequired, disabled]);

  const Indicator = labelIndicatorVariants[fieldState];

  const indicatorTitle = errorMessage || title || defaultTitles[fieldState];

  const shouldShowIndicator = fieldState;

  return shouldShowIndicator && <Indicator title={indicatorTitle} />;
};

export default LabelIndicator;

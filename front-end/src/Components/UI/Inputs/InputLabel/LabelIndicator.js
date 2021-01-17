import React from "react";
import IndicatorError from "Components/UI/DataDisplay/Indicator/IndicatorError";
import IndicatorDisabled from "Components/UI/DataDisplay/Indicator/IndicatorDisabled";
import IndicatorRequired from "Components/UI/DataDisplay/Indicator/IndicatorRequired";
import IndicatorValid from "Components/UI/DataDisplay/Indicator/IndicatorValid";

const LabelIndicator = ({
  required,
  error,
  disabled,
  title,
  errorMessage,
  isValid,
}) => {
  let Indicator;

  // Dynamically set LabelIndicator component depending on props (input field state)
  switch (true) {
    // if input is required and not disabled and not have error
    case required && !disabled && !error:
      Indicator = (
        <IndicatorRequired
          size="small"
          title={title || "This field is required"}
          color="orange"
        />
      );
      break;
    case disabled:
      Indicator = (
        <IndicatorDisabled
          size="small"
          title={title || "This field is disabled"}
        />
      );
      break;
    case error:
      Indicator = (
        <IndicatorError
          size="small"
          title={errorMessage || "This field have some errors"}
          color="red"
        />
      );
      break;
    case isValid:
      Indicator = (
        <IndicatorValid
          size="small"
          title={"This field is valid. No errors."}
          color="green"
        />
      );
      break;
    default:
      Indicator = false;
  }

  return Indicator;
};

export default LabelIndicator;

import React from "react";
import Indicator from "./Indicator";
import Warning from "@material-ui/icons/Warning";

export const IndicatorError = (props) => (
  <Indicator icon={Warning} color="red" {...props} />
);

export default IndicatorError;


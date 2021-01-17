import React from "react";
import IndicatorBase from "./IndicatorBase";
import Warning from "@material-ui/icons/Warning";

export const IndicatorError = (props) => (
  <IndicatorBase icon={Warning} {...props} />
);

export default IndicatorError;


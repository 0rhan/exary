import React from "react";
import Indicator from "./Indicator";
import CheckIcon from "@material-ui/icons/Check";

const IndicatorValid = (props) => (
  <Indicator {...props} icon={CheckIcon} color="green" />
);

export default IndicatorValid;

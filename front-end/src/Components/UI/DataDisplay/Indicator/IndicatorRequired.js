import React from "react";
import IndicatorBase from "./IndicatorBase";
import PriorityHigh from "@material-ui/icons/PriorityHigh";

const IndicatorRequired = (props) => (
  <IndicatorBase icon={PriorityHigh} {...props} />
);


export default IndicatorRequired;

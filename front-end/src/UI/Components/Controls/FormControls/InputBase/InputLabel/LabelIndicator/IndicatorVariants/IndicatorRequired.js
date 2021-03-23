import React from "react";
import Indicator from "./Indicator";
import NewReleasesIcon from "@material-ui/icons/NewReleases";

const IndicatorRequired = (props) => (
  <Indicator icon={NewReleasesIcon} color="orange" {...props} />
);

export default IndicatorRequired;

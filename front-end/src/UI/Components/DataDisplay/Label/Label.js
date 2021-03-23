import React from "react";
import PropTypes from "prop-types";
import LabelBase from "./LabelBase"
import LabelStyledEdge from "./LabelStyledEdge"

const Label = ({labelStyle, ...otherProps }) => {
  const LabelStyledComponent = labelStyle ? LabelStyledEdge : LabelBase;

  return <LabelStyledComponent labelStyle={labelStyle} {...otherProps} />;
};

Label.propTypes = {
  labelStyle: PropTypes.string,
};

export default Label;


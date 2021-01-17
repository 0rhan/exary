import React from "react";
import PropTypes from "prop-types";
import LabelBase from "./LabelBase"
import LabelEdgeCuted from "./LabelEdgeCuted"

// TODO: Styled default prop
// TODO: Remove padding for full width label
// TODO: Change labelEdged prop to Label[Position]Edged

const Label = ({labelStyle, ...otherProps }) => {
  const LabelStyledComponent = labelStyle ? LabelEdgeCuted : LabelBase;

  return <LabelStyledComponent labelStyle={labelStyle} {...otherProps} />;
};

Label.propTypes = {
  labelStyle: PropTypes.string,
};

export default Label;


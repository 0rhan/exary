import React from "react";
import labelEdgeVariants from "./LabelEdgeVariants/labelEdgeVariants";

const LabelStyledEdge = ({ labelStyle = "base", position, ...otherProps }) => {

  let StyledLabelComponent = labelEdgeVariants[labelStyle];

  return <StyledLabelComponent position={position} {...otherProps} />;
};

export default LabelStyledEdge;


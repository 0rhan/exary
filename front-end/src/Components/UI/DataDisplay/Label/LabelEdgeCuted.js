import React from "react";
import styled from "styled-components";
import LabelBase from "./LabelBase";

// TODO: Styled default prop
// TODO: Remove padding for full width label
// TODO: Change labelEdged prop to Label[Position]Edged

const LabelEdgeCuted = ({ labelStyle, position, ...otherProps }) => {
  let StyledLabelComponent;

  switch (labelStyle) {
    case "left edge":
      StyledLabelComponent = LabelLeftEdgeCuted;
      break;
    case "right edge":
      StyledLabelComponent = LabelRightEdgeCuted;
      break;
    case "both edges":
      StyledLabelComponent = LabelBothEdgeCuted;
      break;
    default:
      StyledLabelComponent = LabelBase;
  }

  return (
    <StyledLabelComponent
      labelStyle={labelStyle}
      position={position}
      {...otherProps}
    />
  );
};

export default LabelEdgeCuted;

const LabelLeftEdgeCuted = styled(LabelBase)`
  clip-path: polygon(10px 0, 100% 0%, 100% 100%, 0 100%, 0 10px);
  padding-left: 15px;
`;

const LabelRightEdgeCuted = styled(LabelBase)`
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
`;

const LabelBothEdgeCuted = styled(LabelBase)`
  padding-left: 15px;
  clip-path: polygon(
    10px 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    0 100%,
    0 10px
  );
`;

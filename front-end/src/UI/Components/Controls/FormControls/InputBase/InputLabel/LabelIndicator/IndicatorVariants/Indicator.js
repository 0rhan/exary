import React from "react";
import styled from "styled-components";
import IndicatorBase from "UI/Components/DataDisplay/Indicator/IndicatorBase";

const Indicator = ({ className, ...props }) => (
  <SmallIndicator className={className} {...props} />
);

export default Indicator;

const SmallIndicator = styled(IndicatorBase)`
  span {
    box-sizing: border-box;
  }

  svg {
    height: 16px;
    width: 16px;
  }
`;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Indicator = ({ icon: Icon, title, size, className, color }) => {
  return (
    <IndicatorContainer title={title} color={color} className={className}>
      <Icon fontSize={size} />
    </IndicatorContainer>
  );
};

Indicator.propTypes = {
  color: PropTypes.string,
  statusColor: PropTypes.string,
  changeStatus: PropTypes.bool,
};

export default Indicator;

const IndicatorContainer = styled.span`
  display: flex;
  padding: 4px;
  cursor: help;
  color: ${({ color, statusColor, changeStatus }) =>
    statusColor && changeStatus ? statusColor : color || "inherit"};
`;

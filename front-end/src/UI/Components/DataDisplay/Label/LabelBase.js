import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LabelBase = ({
  element: as = "label",
  labelPosition,
  children,
  ...otherProps
}) => {
  const allowedPositions = {
    left: "flex-start",
    center: "center",
    right: "flex-end",
  };

  return (
    <Component
      as={as}
      labelPosition={labelPosition}
      allowedPositions={allowedPositions}
      {...otherProps}
    >
      {children}
   </Component>
  );
};

LabelBase.defaultPropTypes = {
  labelText: "",
  labelUppercase: false,
};

LabelBase.propTypes = {
  position: PropTypes.oneOf(["left", "center", "right"]),
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default LabelBase;

const Component = styled.div`
  color: ${({ theme }) => theme.light.bg};
  text-decoration: ${({ error }) => (error ? "underline" : "none")};
  text-transform: ${({ labelUppercase }) =>
    labelUppercase ? "uppercase" : "none"};
  height: 20px;
  background-color: ${({ theme }) => theme.light.fg};
  padding-right: 4px;
  padding-left: 4px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  height: max-content; 
  align-self: ${({ allowedPositions, labelPosition }) =>
    allowedPositions[labelPosition] || "auto"};
`;

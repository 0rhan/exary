import React from "react";
import styled from "styled-components";
import TextField from "./TextField"

const NumberField = (props) => {
return  <StyledTextField type="number" {...props}/>;
};

export default NumberField;


const StyledTextField = styled(TextField)`
  width: 80px;
`

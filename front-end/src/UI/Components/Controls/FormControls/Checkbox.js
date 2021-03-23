import React from "react";
import styled from "styled-components";
import BaseContainer from "UI/Components/Layout/BaseContainer"
import { useField } from "formik";

const Checkbox = ({ label, name }) => {
  const [field, meta] = useField({ name, type: "checkbox" });

  return (
    <CheckboxContainer>
      <label>{label}</label>
      <Check type="checkbox" {...field} />
    </CheckboxContainer>
  );
};

export default Checkbox;

const CheckboxContainer = styled(BaseContainer)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: max-content;
  margin-top: 15px;
`;

const Check = styled.input`
  &[type="checkbox"] {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.light.fg};
    appearance: none;
    border-radius: 0px;
    outline: none;
    position: relative;
    margin: 10px;
  }

  &[type="checkbox"]::before {
    content: "✔";
    color: ${({ theme }) => theme.light.bg};
    position: absolute;
    visibility: hidden;
    left: 2px;
    font-size: 21px;
    bottom: -2px;
  }

  &[type="checkbox"]:checked::before {
    visibility: visible;
  }
`;

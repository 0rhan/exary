import React from "react";
import BaseButton from "UI/Components/Controls/Buttons/BaseButton/BaseButton";
import ButtonLabel from "UI/Components/Controls/Buttons/BaseButton/ButtonLabel";
import styled from "styled-components";

const Button = ({
  className,
  disabled,
  type,
  children,
  onClick,
  icon: Icon,
  placeIconToEnd,
}) => {

  return (
    <StyledBaseButton
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      <StyledButtonLabel iconPosition={placeIconToEnd}>
        {Icon && <Icon />}
        {children}
      </StyledButtonLabel>
    </StyledBaseButton>
  );
};

export default Button;

const StyledBaseButton = styled(BaseButton)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.light.fgFaded : theme.light.fg};
  color: ${({ theme, disabled }) =>
    disabled ? theme.light.bgFaded : theme.light.bg};
  min-width: 64px;
  padding: 6px 16px;
  border: double 5px ${({ theme }) => theme.light.bg};
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const StyledButtonLabel = styled(ButtonLabel)`
  flex-direction: ${({ iconPosition }) =>
    iconPosition ? "row-reverse" : "row"};
`;

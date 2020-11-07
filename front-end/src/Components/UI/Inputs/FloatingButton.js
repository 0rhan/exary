import React from "react"
import styled from "styled-components"
import BaseButton from "Components/UI/Inputs/BaseButton/BaseButton"
import ButtonLabel from "Components/UI/Inputs/BaseButton/ButtonLabel"

function FloatingButton({className, extended=false, label="", icon: Icon, onClick}) {
  return (
    <StyledButton className={className} onClick={onClick}>
      <ButtonLabel>
        <Icon/>
        {label}
      </ButtonLabel>
    </StyledButton>
  )
}

export default FloatingButton;

const StyledButton = styled(BaseButton)`
  width: 54px;
  height: 54px;
  position: relative;
  background-color: ${({theme})=> theme.light.bg};
  color: inherit;
  box-sizing: border-box;
  border: 2px solid;
  border-color: ${({theme})=> theme.light.fg};
  bottom: 0px;
`


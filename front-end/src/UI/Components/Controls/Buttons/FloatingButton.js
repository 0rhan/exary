import React from "react"
import styled from "styled-components"
import BaseButton from "UI/Components/Controls/Buttons/BaseButton/BaseButton"
import ButtonLabel from "UI/Components/Controls/Buttons/BaseButton/ButtonLabel"

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
  @media screen and (min-width: 320px) and (max-width: 765px) {
    width: 40px;
    height: 40px;
  }
`


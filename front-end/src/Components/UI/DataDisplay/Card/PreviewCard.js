import React from "react"
import styled from "styled-components"
import FullWidthContainer from "Components/UI/Layout/Container/FullWidthContainer"

const PreviewCard = ({children, className}) => {
  return (
    <PreviewCardContainer className={className}>
      {children}
    </PreviewCardContainer>
  )
}

export default PreviewCard;


const PreviewCardContainer = styled(FullWidthContainer)`
  border: 2px solid;
  min-width: 200px;
  border-radius: 2px;
  height: 140px;
  margin-bottom: 10px;
`

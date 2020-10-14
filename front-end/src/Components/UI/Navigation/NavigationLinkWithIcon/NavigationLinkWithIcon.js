import React from "react";
import NavigationLinkBase from "Components/UI/Navigation/NavigationLinkBase/NavigationLinkBase";
import styled from "styled-components";

const NavigationLinkWithIcon = ({to, children, icon}) => {
  const Icon = icon;
  return (
    <StyledLink to={to}>
      <Container>
        <Icon />
        <Label>
          {children}
        </Label>
      </Container>
    </StyledLink>
  );
}

export default NavigationLinkWithIcon;

const StyledLink = styled(NavigationLinkBase)`
  width: 100%
`

const Container = styled.span`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Label = styled.span`
  font-size: 14px;
`

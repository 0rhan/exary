import React from "react";
import styled from "styled-components";
import Dashboard from "Screens/Dashboard";
import Exercises from "Screens/Exercises";
import About from "Screens/About";
import { Route, Switch } from "react-router-dom";

export default () => {
  return (
    <MainContainer>
      <ContentWrapper>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/exercises">
            <Exercises />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 100px;
  padding-left: 100px;
  box-sizing: border-box;
`;

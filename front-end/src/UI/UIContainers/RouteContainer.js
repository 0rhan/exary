import React from "react";
import styled from "styled-components";
import Dashboard from "Domains/Dashboard";
import ExercisesContainer from "Domains/Exercises/Containers/ExercisesContainer";
import About from "Domains/About";
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
            <ExercisesContainer />
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
  @media screen and (min-width: 320px) and (max-width: 425px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  @media screen and (min-width: 425px) and (max-width: 767px) {
    padding-right: 40px;
    padding-left: 40px;
  }
`;

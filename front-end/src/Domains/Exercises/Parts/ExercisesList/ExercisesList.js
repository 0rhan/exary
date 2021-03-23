import React from "react";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import styled from "styled-components";

const ExercisesList = ({ exercisesList, deleteExercise }) => {
  const exercisesListIsEmpty = exercisesList.length === 0;

  if (exercisesListIsEmpty) {
    return <Placeholder>Use + button to add exercise in list</Placeholder>;
  }

  const exercises = exercisesList.map((item) => {
    const { _id } = item;
    return (
      <ExerciseCard
        key={_id}
        exercise={item}
        deleteExercise={deleteExercise}
      ></ExerciseCard>
    );
  });

  return exercises;
};

export default ExercisesList;

const Placeholder = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.light.fg};
  margin: 0;
  text-align: center;
  font-size: 24px;
`;

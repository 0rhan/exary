import React from "react";
import Card from "UI/Components/DataDisplay/Card/Card";
import CardHeader from "UI/Components/DataDisplay/Card/CardHeader";
import CardContent from "UI/Components/DataDisplay/Card/CardContent";
import CardItem from "UI/Components/DataDisplay/Card/CardItem";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import BaseButton from "UI/Components/Controls/Buttons/BaseButton/BaseButton"
import styled from "styled-components";

const ExerciseCard = ({
  exercise: { name, reps, sets, muscleGroup, _id },
  deleteExercise,
}) => {
  return (
    <StyledCard>
      <CardHeader label={name}>
        <h3>{name}</h3>
        <DeleteButton onClick={() => deleteExercise(_id)}>
          Delete <DeleteForeverIcon />
        </DeleteButton>
      </CardHeader>
      <CardContent>
        <CardItem label="Muscle group" text={muscleGroup} />
        <CardItem label="Sets" text={sets} />
        <CardItem label="Reps" text={reps} />
      </CardContent>
    </StyledCard>
  );
};

export default ExerciseCard;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  border-width: 6px;
  box-sizing: border-box;
  border-color: ${({ theme }) => theme.light.fg};
  border-style: double;
  border-radius: 0px;
`;

const DeleteButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.light.fg};
  color: ${({ theme }) => theme.light.bg};
  align-self: flex-end;
  height: 100%;
  border-left: 2px solid;
`;

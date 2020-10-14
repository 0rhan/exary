import React from "react";
import ButtonBase from "Components/UI/Inputs/BaseButton/BaseButton";
import ButtonLabel from "Components/UI/Inputs/BaseButton/ButtonLabel";

const IconButton = ({ icon: Icon, onClick }) => {
  return (
    <ButtonBase onClick={onClick}>
      <ButtonLabel>
        <Icon />
      </ButtonLabel>
    </ButtonBase>
  );
};

export default IconButton;



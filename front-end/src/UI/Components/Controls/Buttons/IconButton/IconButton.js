import React from "react";
import ButtonBase from "../BaseButton/BaseButton";
import ButtonLabel from "../BaseButton/ButtonLabel";

const IconButton = ({ icon: Icon, onClick, className }) => {
  return (
    <ButtonBase onClick={onClick} className={className}>
      <ButtonLabel>
        <Icon />
      </ButtonLabel>
    </ButtonBase>
  );
};

export default IconButton;



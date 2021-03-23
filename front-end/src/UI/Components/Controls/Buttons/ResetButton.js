import React from "react";
import Button from "./Button";
import ClearIcon from "@material-ui/icons/ClearAll";

const ResetButton = ({onClick, children}) => {

  return (
    <Button
      icon={ClearIcon}
      placeIconToEnd={true}
      type="reset"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ResetButton;


import React from "react";
import Button from "./Button";
import CreateIcon from "@material-ui/icons/Create";

const SubmitButton = ({disabled, children}) => {

  return (
    <Button
      disabled={disabled}
      icon={CreateIcon}
      placeIconToEnd={true}
      type="submit"
    >
      {children}
    </Button>
  );
};

export default SubmitButton;



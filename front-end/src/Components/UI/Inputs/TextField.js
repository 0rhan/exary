import React, { useState } from "react";
import { useField } from "formik";
import InputContainer from "Components/UI/Inputs/InputBase/InputContainer";
import InputLabel from "Components/UI/Inputs/InputLabel/InputLabel";
import InputBase from "Components/UI/Inputs/InputBase/InputBase";

// TODO: [IMPORTANT] Unify Input for all browsers

// TODO: Add comments
// TODO: Simplify code?
// TODO: Create context

const TextField = ({ type = "text", label, ...props }) => {
  const [field, meta] = useField({
    ...props,
  });

  const error = Boolean(meta.error);

  const [focusState, setFocusState] = useState(false);

  const handleBlurChange = (event) => {
    //call formik built-in blur handler
    field.onBlur(event);

    setFocusState(false);
  };

  const handleFocusChange = () => setFocusState(true);

  return (
    <InputContainer error={error}>
      <InputLabel
        errorMessage={meta.error}
        error={error}
        focus={focusState}
        isValid={true}
        {...props}
      >
        {label}
      </InputLabel>
      <InputBase
        error={error}
        type="text"
        {...props}
        {...field}
        onFocus={handleFocusChange}
        onBlur={handleBlurChange}
      />
    </InputContainer>
  );
};

export default TextField;

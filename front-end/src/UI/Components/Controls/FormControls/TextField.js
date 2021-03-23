import React, { useState } from "react";
import { useField } from "formik";
import InputContainer from "./InputBase/InputContainer";
import InputLabel from "./InputBase/InputLabel/InputLabel";
import InputBase from "./InputBase/InputBase";
import InputErrorMessage from "./InputBase/InputErrorMessage";

const TextField = (props) => {
  const [field, meta] = useField({
    ...props,
  });

  const { name, type = "text", label, className } = props;

  const error = Boolean(meta.error);

  const { touched, value } = meta;

  const [focusState, setFocusState] = useState(false);

  const handleBlurChange = (event) => {
    //call formik built-in blur handler
    field.onBlur(event);

    setFocusState(false);
  };

  const handleFocusChange = () => setFocusState(true);

  return (
    <InputContainer className={className}>
      <InputLabel
        errorMessage={meta.error}
        error={error}
        focus={focusState}
        isValid={true}
        touched={touched}
        value={value}
        {...props}
      >
        {label}
      </InputLabel>
      <InputBase
        error={error}
        type={type}
        {...props}
        {...field}
        onFocus={handleFocusChange}
        onBlur={handleBlurChange}
      />
      <InputErrorMessage
        fieldName={name}
        touched={touched}
        error={error}
        focus={focusState}
      />
    </InputContainer>
  );
};

export default TextField;

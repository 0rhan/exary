const validateSetsRepsFields = (value) => {
  let errorMessage;

  if (value <= 0) {
    errorMessage = "Min value is 1";
  }

  return errorMessage;
};

export default validateSetsRepsFields;

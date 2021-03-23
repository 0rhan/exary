const validateExerciseName = (exerciseName) => {
  let errorMessage;

  const exerciseNameRegex = /(^([a-zа-я0-9]{3,15} [a-zа-я0-9]{3,15})|^[a-zа-я0-9]{3,25})(?![\w\W\d])/gim;

  const exerciseNameIsNotMatching = !exerciseNameRegex.test(exerciseName)

  const exerciseNameIsEmpty = !exerciseName

  if (exerciseNameIsEmpty) {
    errorMessage = "Exercise name is required";
  } else if (exerciseNameIsNotMatching) {
    errorMessage = "Min length 3, allowed characters [A-z, А-я 0-9]";
  }

  return errorMessage;
};

export default validateExerciseName;

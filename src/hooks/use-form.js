import { useState } from 'react';

const useForm = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(enteredValue);
  const hasError = !isValid && isTouched;

  const onChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const onBlurHandler = e => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    valueIsValid: isValid,
    hasError: hasError,
    onChangeHandler,
    onBlurHandler,
    reset,
  };
};

export default useForm;

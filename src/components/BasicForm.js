import useForm from '../hooks/use-form';

const BasicForm = props => {
  const {
    value: enteredName,
    valueIsValid: enteredNameIsValid,
    hasError: nameHasError,
    onChangeHandler: onChangeFirstNameHandler,
    onBlurHandler: onBlurFirstNameHandler,
    reset: resetFirstName,
  } = useForm(firstName => firstName.trim() !== '');

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailIsValid,
    hasError: emailHasError,
    onChangeHandler: onChangeEmailHandler,
    onBlurHandler: onBlurEmailHandler,
    reset: resetEmail,
  } = useForm(email => email.includes('@'));

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    onChangeHandler: onChangeLastNameHandler,
    onBlurHandler: onBlurLastNameHandler,
    reset: resetLastName,
  } = useForm(lastName => lastName.trim() !== '');

  let formIsValid =
    enteredNameIsValid && enteredEmailIsValid & enteredLastNameIsValid;

  const onSubmitHandler = e => {
    e.preventDefault();
    if (nameHasError || emailHasError || lastNameHasError) {
      return;
    }
    console.log('submited');
    resetFirstName();
    resetEmail();
    resetLastName();
  };

  const firstNameClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control';
  const lastNameClasses = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailNameClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={onChangeFirstNameHandler}
            onBlur={onBlurFirstNameHandler}
          />
          {nameHasError && (
            <p className="error-text">Please enter valid name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={onChangeLastNameHandler}
            onBlur={onBlurLastNameHandler}
          />
          {lastNameHasError && (
            <p className="error-text">Enter valid last name</p>
          )}
        </div>
      </div>
      <div className={emailNameClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={enteredEmail}
          onChange={onChangeEmailHandler}
          onBlur={onBlurEmailHandler}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

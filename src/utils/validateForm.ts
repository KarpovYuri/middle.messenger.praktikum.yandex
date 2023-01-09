function validateForm(inputElement: HTMLInputElement | null | undefined) {

  if (!inputElement) return;

  const formElement: HTMLFormElement | null = inputElement.closest('form');
  const submitButton: HTMLButtonElement | null | undefined  = formElement?.querySelector('[type=submit]');
  let isValid: boolean | undefined = false;

  if (inputElement.type !== 'checkbox') {
    isValid = formElement?.checkValidity();
  } else {
    const formElements = formElement?.querySelectorAll('input');
    formElements?.forEach((input) => input.checked ? isValid = true : null );
  }


  if (isValid) {
    submitButton!.disabled = false;
    submitButton?.classList.remove('inactive');
  } else  {
    submitButton!.disabled = true;
    submitButton?.classList.add('inactive');
  }
}

export default validateForm;

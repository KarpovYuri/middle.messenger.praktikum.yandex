function validateForm(inputElement: HTMLInputElement | null | undefined) {

  if (!inputElement) return;

  const formElement: HTMLFormElement | null = inputElement.closest('form');

  const submitButton: HTMLButtonElement | null | undefined  = formElement?.querySelector('[type=submit]');
  const isValid = formElement?.checkValidity();

  if (isValid) {
    submitButton!.disabled = false;
    submitButton?.classList.remove('inactive');
  } else  {
    submitButton!.disabled = true;
    submitButton?.classList.add('inactive');
  }
}

export default validateForm;

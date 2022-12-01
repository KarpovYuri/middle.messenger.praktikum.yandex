function validateForm() {
  const formElement: HTMLInputElement | null = document.querySelector('.form');

  if (!formElement) return;

  const submitButton: HTMLButtonElement | null  = formElement?.querySelector('[type=submit]');
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

import validateForm from './validateForm';

function handleSubmit(evt: Event) {
  evt.preventDefault();
  const fields: any = Array.from(document.querySelectorAll('.input'));
  const formData = fields.reduce((acc: Record<string, string>, field: HTMLInputElement) => {
    acc[field.name] = field.value;
    field.value = '';
    return acc;
  }, {});
  console.log(formData);
  validateForm();
}

export default handleSubmit;

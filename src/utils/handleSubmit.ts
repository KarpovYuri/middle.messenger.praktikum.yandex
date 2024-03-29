function handleSubmit(evt: Event) {
  evt.preventDefault();
  const fields: any = Array.from(document.querySelectorAll('.input'));
  const formData = fields.reduce((acc: Record<string, string>, field: HTMLInputElement) => {
    if (field.type === 'checkbox' && !field.checked) return acc;
    acc[field.name] = field.value;
    return acc;
  }, {});
  return formData;
}

export default handleSubmit;

const storingFormData = () => {
  const fields = document.querySelectorAll('[data-field]');
  const form = document. querySelector('[data-form]');

  if (fields.length > 0 && form) {
    form.addEventListener('submit', (evt)=>{
      evt.preventDefault();
      fields.forEach((field)=>{
        localStorage.setItem(field.name, field.value);
      });
    });
  }
};

export {storingFormData};

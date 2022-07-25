const storingFormData = () => {
  const form = document.querySelector('[data-form]');
  const fields = form.querySelectorAll('[data-field]');
  const checkbox = form.querySelector('[data-field-checkbox]');
  const formModal = document.querySelector('[data-form-modal]');
  const fieldsModal = formModal.querySelectorAll('[data-field-modal]');
  const checkboxModal = formModal.querySelector('[data-field-modal-checkbox]');

  if (fields.length > 0 && form !== null) {
    getDataForm(form, fields, checkbox);
  }

  if (fieldsModal.length > 0 && formModal !== null) {
    getDataForm(formModal, fieldsModal, checkboxModal);
  }

  function getDataForm(formName, fieldsName, checkboxName) {
    formName.addEventListener('submit', (evt) => {
      evt.preventDefault();
      fieldsName.forEach((field) => {
        localStorage.setItem(field.name, field.value);
      });
    });

    if (checkboxName !== null) {
      localStorage.setItem(checkboxName.name, checkboxName.checked);
    }
  }
};

export {storingFormData};

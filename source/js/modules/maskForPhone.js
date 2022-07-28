const getMaskForPhone = () => {
  let phoneInputs = document.querySelectorAll('[data-phone]');

  let getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, '');
  };

  let onPhonePaste = function (e) {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  let onPhoneInput = function (e) {
    let input = e.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let selectionStart = input.selectionStart;
    let formattedInputValue = '';

    if (!inputNumbersValue) {
      input.value = '';
      return;
    }

    if (Number(input.value.length) !== Number(selectionStart)) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      let firstSymbols = (Number(inputNumbersValue[0]) === 7) ? '+7' : `+7 (${inputNumbersValue}`;
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  let onPhoneKeyDown = function (e) {
    let inputValue = e.target.value.replace(/\D/g, '');
    if (Number(e.keyCode) === 8 && Number(inputValue.length) === 1) {
      e.target.value = '';
    }
  };
  for (let phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
};

export {getMaskForPhone};

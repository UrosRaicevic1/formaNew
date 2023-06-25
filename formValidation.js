export function validateField(field, errorMessage) {
    if (field.value === '') {
      field.classList.add('error');
      field.nextElementSibling.textContent = errorMessage;
      return false;
    } else {
      field.classList.remove('error');
      field.nextElementSibling.textContent = '';
      return true;
    }
  }
  
  export function validatePassword(password, passwordError) {
    if (password.value === '') {
      password.classList.add('error');
      passwordError.innerHTML = 'Obavezno polje!';
      return false;
    } else if (password.value.length < 6) {
      password.classList.add('error');
      passwordError.innerHTML = 'Lozinka mora imati najmanje 6 karaktera';
      return false;
    } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
      password.classList.add('error');
      passwordError.innerHTML = 'Lozinka mora sadržavati barem jedno malo slovo, jedno veliko slovo i jednu cifru';
      return false;
    } else {
      password.classList.remove('error');
      passwordError.innerHTML = '';
      return true;
    }
  }
  
  export function validateConfirmPassword(confirmPassword, password, confirmPasswordError) {
    if (confirmPassword.value === '') {
      confirmPassword.classList.add('error');
      confirmPasswordError.innerHTML = 'Obavezno polje!';
      return false;
    } else if (confirmPassword.value !== password.value) {
      confirmPassword.classList.add('error');
      confirmPasswordError.innerHTML = 'Lozinke se ne podudaraju';
      return false;
    } else {
      confirmPassword.classList.remove('error');
      confirmPasswordError.innerHTML = '';
      return true;
    }
  }
  
  export function validateCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checkedCheckboxes = 0;
  
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedCheckboxes++;
      }
    }
  
    if (checkedCheckboxes === 0) {
      checkboxResult.innerHTML = 'Morate izabrati barem jednu opciju';
      return false;
    } else {
      checkboxResult.innerHTML = '';
      return true;
    }
  }
  
  export function validateRadioButtons() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    let checkedRadioButton = false;
  
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        checkedRadioButton = true;
        break;
      }
    }
  
    if (!checkedRadioButton) {
      radioResult.innerHTML = 'Morate izabrati barem jednu opciju';
      return false;
    } else {
      radioResult.innerHTML = '';
      return true;
    }
  }
  
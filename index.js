const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const submissionSuccessMessage = document.getElementById('output');
const checkboxResult = document.getElementById('checkboxResult');
const radioResult = document.getElementById('radioResult');

function validateField(field, errorMessage) {
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

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let valid = true;

  valid &= validateField(firstName, 'Obavezno polje');
  valid &= validateField(lastName, 'Obavezno polje!');
  valid &= validateField(email, 'Obavezno polje!');

  if (password.value === '') {
    valid = false;
    password.classList.add('error');
    passwordError.innerHTML = 'Obavezno polje!';
  } else if (password.value.length < 6) {
    valid = false;
    password.classList.add('error');
    passwordError.innerHTML = 'Lozinka mora imati najmanje 6 karaktera';
  } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
    valid = false;
    password.classList.add('error');
    passwordError.innerHTML = 'Lozinka mora sadržavati barem jedno malo slovo, jedno veliko slovo i jednu cifru';
  } else {
    password.classList.remove('error');
    passwordError.innerHTML = '';
  }

  if (confirmPassword.value === '') {
    valid = false;
    confirmPassword.classList.add('error');
    confirmPasswordError.innerHTML = 'Obavezno polje!';
  } else if (confirmPassword.value !== password.value) {
    valid = false;
    confirmPassword.classList.add('error');
    confirmPasswordError.innerHTML = 'Lozinke se ne podudaraju';
  } else {
    confirmPassword.classList.remove('error');
    confirmPasswordError.innerHTML = '';
  }

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checkedCheckboxes = 0;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCheckboxes++;
    }
  }

  if (checkedCheckboxes === 0) {
    valid = false;
    checkboxResult.innerHTML = 'Morate izabrati barem jednu opciju';
  } else {
    checkboxResult.innerHTML = '';
  }

  const radioButtons = document.querySelectorAll('input[type="radio"]');
  let checkedRadioButton = false;

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkedRadioButton = true;
      break;
    }
  }

  if (!checkedRadioButton) {
    valid = false;
    radioResult.innerHTML = 'Morate izabrati jednu opciju';
  } else {
    radioResult.innerHTML = '';
  }

  if (valid) {
    let pElem = document.createElement('p');
    pElem.textContent = `First name: ${firstName.value}`;
    submissionSuccessMessage.appendChild(pElem);
    pElem = document.createElement('p');
    pElem.textContent = `Last name: ${lastName.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement('p');
    pElem.textContent = `Email: ${email.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement('p');
    pElem.textContent = `Password: ${password.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement('p');
    pElem.textContent = `Checkbox: ${checkboxResult.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement('p');
    pElem.textContent = `Radio: ${radioResult.value}`;
    submissionSuccessMessage.appendChild(pElem);
  }
});
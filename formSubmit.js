import { validateField, validatePassword, validateConfirmPassword, validateCheckboxes, validateRadioButtons } from './formValidation.js';

export function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('registrationForm');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const submissionSuccessMessage = document.getElementById('output');

  let valid = true;

  valid &= validateField(firstName, 'Obavezno polje');
  valid &= validateField(lastName, 'Obavezno polje!');
  valid &= validateField(email, 'ooobavezno polje! ');

  valid &= validatePassword(password, passwordError);
  valid &= validateConfirmPassword(confirmPassword, password, confirmPasswordError);
  valid &= validateCheckboxes();
  valid &= validateRadioButtons();

  if (valid) {
    displaySubmissionSuccessMessage(firstName, lastName, email, password, submissionSuccessMessage);
  }
}

export function displaySubmissionSuccessMessage(firstName, lastName, email, password, submissionSuccessMessage) {
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

// const form = document.getElementById('registrationForm');
// const firstName = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const confirmPassword = document.getElementById('confirmPassword');
// const passwordError = document.getElementById('passwordError');
// const confirmPasswordError = document.getElementById('confirmPasswordError');
// const submissionSuccessMessage = document.getElementById('output');

// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   let valid = true;

//   var isValidFirstName = validateField('firstName');
//   // if (firstName.value === '') {
//   //   valid = false;
//   //   firstName.classList.add('error');
//   //   firstName.nextElementSibling.innerHTML = 'Obavezno polje';
//   // } else {
//   //   firstName.classList.remove('error');
//   //   firstName.nextElementSibling.innerHTML = '';
//   // }

//   if (lastName.value === '') {
//     valid = false;
//     lastName.classList.add('error');
//     lastName.nextElementSibling.innerHTML = 'Obavezno polje!';
//   } else {
//     lastName.classList.remove('error');
//     lastName.nextElementSibling.innerHTML = '';
//   }

//   if (email.value=== '') {
//     valid = false;
//     email.classList.add('error');
//     email.nextElementSibling.innerHTML = 'Obavezno polje!';
//   } else {
//     email.classList.remove('error');
//     email.nextElementSibling.innerHTML = '';
//   }

//   if (password.value === '') {
//     valid = false;
//     password.classList.add('error');
//     passwordError.innerHTML = 'Obavezno polje!';
//   } else if (password.value.length < 6) {
//     valid = false;
//     password.classList.add('error');
//     passwordError.innerHTML = 'Lozinka mora imati  najmanje 6 karaktera';
//   } else if (!password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)) {
//     valid = false;
//     password.classList.add('error');
//     passwordError.innerHTML = 'Lozinka mora da sadri bar jedno malo slovo, jedno veliko slovo i jednu cifru';
//   } else {
//     password.classList.remove('error');
   
//     passwordError.innerHTML = '';
//   }

//   if (confirmPassword.value === '') {
//     valid = false;
//     confirmPassword.classList.add('error');
//     confirmPasswordError.innerHTML = 'Obavezno polje!';
//   } else if (confirmPassword.value !== password.value) {
//     valid = false;
//     confirmPassword.classList.add('error');
//     confirmPasswordError.innerHTML = 'Ne podudaraju se ';
//   } else {
//     confirmPassword.classList.remove('error');
//     confirmPasswordError.innerHTML = '';

//   }

//   function validateField(fieldId) {
//     var field = document.getElementById(fieldId);
//     var valid = true;
  
//     if (field.value === '') {
//       valid = false;
//       field.classList.add('error');
//       field.nextElementSibling.innerHTML = 'Obavezno polje';
//     } else {
//       field.classList.remove('error');
//       field.nextElementSibling.innerHTML = '';
//     }
  
//     return valid;
//   }



//   if (valid) {
//     const pElem = document.createElement("p");

//     pElem.textContent = `First name: ${firstName.value}`;
//     submissionSuccessMessage.insertAdjacentElement("beforeend" , pElem);
//     submissionSuccessMessage.insertAdjacentElement(pElem);


//     pElem.textContent = `Last name: ${lastName.value}`;
//     submissionSuccessMessage.insertAdjacentElement("beforeend" , pElem);
//     submissionSuccessMessage.insertAdjacentElement(pElem);


//     pElem.textContent = `Email: ${email.value}`;
//     submissionSuccessMessage.insertAdjacentElement("beforeend" , pElem);
//     submissionSuccessMessage.insertAdjacentElement(pElem);


    
    
    
//     // submissionSuccessMessage.innerHTML = `
//     //   <p>First name: ${firstName.value}</p>
//     //   <p>Last name: ${lastName.value}</p>
//     //   <p>Email address: ${email.value}</p>
//     //   <p>Password: ${password.value}</p>
//     // `;
//     form.reset();
//   }
// });
const form = document.getElementById('registrationForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const submissionSuccessMessage = document.getElementById('output');

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

  if (valid) {

    let pElem = document.createElement("p");

    pElem.textContent = `First name: ${firstName.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement("p");
    pElem.textContent = `Last name: ${lastName.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement("p");
    pElem.textContent = `Email: ${email.value}`;
    submissionSuccessMessage.appendChild(pElem);

    pElem = document.createElement("p");
    pElem.textContent = `Password: ${password.value}`;
    submissionSuccessMessage.appendChild(pElem);

    form.reset();
  }
});
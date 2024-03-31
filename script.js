const form = document.querySelector("#form");
const password1EL = document.querySelector("#password1");
const password2EL = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let isPasswordMatching;

//validateForm function
function validateForm() {
  // using constraints API
  isValid = form.checkValidity();

  // style message container
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }

  // check to see if passwords match
  if (password1EL.value === password2EL.value) {
    isPasswordMatching = true;
    password1EL.style.borderColor = "green";
    password2EL.style.borderColor = "green";
  } else {
    isPasswordMatching = false;
    message.textContent = "Passwords Do Not Match!";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1EL.style.borderColor = "red";
    password2EL.style.borderColor = "red";
    return;
  }
  // if form is valid and passwords match
  if (isValid && isPasswordMatching) {
    message.textContent = "Successfully Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

// storeFormData funtion
function storeFormData() {
  const user = {
    name: form.fullName.value,
    phone: form.phoneNumber.value,
    email: form.emailAddress.value,
    website: form.websiteUrl.value,
    password: form.password2.value,
  };
  // do something with user data
  console.log(user);
}

// processFormData function
function processFormData(e) {
  e.preventDefault();

  // validate data
  validateForm();
  // submit data if valid
  if (isValid && isPasswordMatching) {
    storeFormData();
  }
}

// Event Listener
form.addEventListener("submit", processFormData);

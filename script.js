const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, errorMsg) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  formControl.querySelector("small").textContent = errorMsg;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  formControl.querySelector("small").textContent = "";
}

// Check email is valid
function checkEmail() {
  let valid = false;
  const email = email.value.trim();
  if (!checkRequired(email) || !isEmailValid(email)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
    valid = true;
  }
  return valid;
}

// Check required fields
function checkRequired(value) {
  value === "" ? false : true;
}

// Check input length
function checkLength(length, min) {
  length < min ? false : true;
}

// Check passwords match
function checkPasswordsMatch() {
  let match = false;
  const password2 = password2.value.trim();
  const password = password.value.trim();

  if (!checkRequired(password2)) {
    showError(password2, "Password2 is required");
  } else if (password !== password2) {
    showError(password2, "Passwords do not match");
  } else {
    showSuccess(password2);
    match = true;
  }

  return match;
}

// Check username is valid
const checkUsername = () => {
  let valid = false;
  const min = 3;
  const usernameCheck = username.value.trim();

  if (
    !checkRequired(usernameCheck) ||
    !checkLength(usernameCheck.length, min)
  ) {
    showError(username, `Username must be at 3 characters`);
  } else {
    showSuccess(username);
    valid = true;
  }
  return valid;
};

// Check email is valid
const isEmailValid = (email) => {
  const emailValid =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailValid.test(email);
};

// Check passwords is valid
const checkPassword = () => {
  let check = false;
  const passwordCheck = password.value.trim();

  if (!checkRequired(passwordCheck)) {
    showError(password, "Password must be at least 6 characters");
  } else {
    showSuccess(password);
    check = true;
  }

  return check;
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isFormValid =
    checkUsername() && checkEmail() && checkPassword() && checkPasswordsMatch();
  if (isFormValid) {
  }
});

form.addEventListener("input", function (e) {
  switch (e.target.id) {
    case "username":
      checkUsername();
      break;
    case "email":
      checkEmail();
      break;
    case "password":
      checkPassword();
      break;
    case "confirm-password":
      checkPasswordsMatch();
      break;
  }
});

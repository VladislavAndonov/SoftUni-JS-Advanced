function validate() {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const companyCheckbox = document.getElementById("company");
  const companyNumberInput = document.getElementById("companyNumber");
  const submitButton = document.getElementById("submit");
  const validMessage = document.getElementById("valid");

  // Regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
  const passwordRegex = /^\w{5,15}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const companyNumberRegex = /^[0-9]{4}$/;

  function validateField(input, regex) {
    return regex.test(input.value);
  }

  function showError(input) {
    input.style.borderColor = "red";
  }

  function hideError(input) {
    input.style.borderColor = "initial";
  }

  function validateForm() {
    let isValid = true;

    if (!validateField(usernameInput, usernameRegex)) {
      showError(usernameInput);
      isValid = false;
    } else {
      hideError(usernameInput);
    }

    if (!validateField(passwordInput, passwordRegex)) {
      showError(passwordInput);
      isValid = false;
    } else {
      hideError(passwordInput);
    }

    if (!validateField(emailInput, emailRegex)) {
      showError(emailInput);
      isValid = false;
    } else {
      hideError(emailInput);
    }

    if (
      !validateField(confirmPasswordInput, passwordRegex) ||
      passwordInput.value !== confirmPasswordInput.value
    ) {
      showError(confirmPasswordInput);
      showError(passwordInput);
      isValid = false;
    } else {
      hideError(confirmPasswordInput);
      hideError(passwordInput);
    }

    if (companyCheckbox.checked) {
      if (!validateField(companyNumberInput, companyNumberRegex)) {
        showError(companyNumberInput);
        isValid = false;
      } else {
        hideError(companyNumberInput);
      }
    } else {
      hideError(companyNumberInput);
    }

    return isValid;
  }

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (validateForm()) {
      validMessage.style.display = "block";
    } else {
      validMessage.style.display = "none";
    }
  });

  companyCheckbox.addEventListener("change", function () {
    if (companyCheckbox.checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  });
}

window.onload = function () {
  validate();
};

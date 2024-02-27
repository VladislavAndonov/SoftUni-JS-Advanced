function validate() {
  const inputRef = document.getElementById("email");
  inputRef.addEventListener("change", onChange);

  function onChange(event) {
    let email = event.target.value;
    let pattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g;
    if (pattern.test(email)) {
      event.target.classList.remove("error");
    } else {
      event.target.classList.add("error");
    }
  }
}

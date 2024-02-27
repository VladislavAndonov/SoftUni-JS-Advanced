function lockedProfile() {
  let buttons = document.querySelectorAll(" button");
  for (let button of buttons) {
    button.addEventListener("click", onClickHandler);
  }
  function onClickHandler(event) {
    let thisTarget = event.currentTarget;
    let userInfo = thisTarget.parentElement.querySelector("div");

    let currentRadioBtn = event.target.parentElement.querySelector(
      "input[type ='radio']:checked"
    );

    if (currentRadioBtn.value == "unlock") {
      if (thisTarget.textContent == "Show more") {
        userInfo.style.display = "block";
        thisTarget.textContent = "Hide it";
      } else if (thisTarget.textContent == "Hide it") {
        userInfo.style.display = "none";
        thisTarget.textContent = "Show more";
      }
    }
  }
}

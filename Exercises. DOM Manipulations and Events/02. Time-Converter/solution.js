function attachEventsListeners() {
  let buttons = Array.from(document.querySelectorAll("input[type = 'button']"));
  for (let button of buttons) {
    button.addEventListener("click", convertHandler);
  }

  function convertHandler(event) {
    let target = event.currentTarget;
    let curentInput = target.parentElement.children[1];
    let value = Number(curentInput.value);
    let unit = curentInput.id;

    switch (unit) {
      case "days":
        propagateNewValue(value);
        break;
      case "hours":
        propagateNewValue(value / 24);
        break;
      case "minutes":
        propagateNewValue(value / 24 / 60);
        break;
      case "seconds":
        propagateNewValue(value / 24 / 60 / 60);
        break;
    }
  }
  function propagateNewValue(days) {
    let inputRefs = document.querySelectorAll("input[type = 'text']");
    inputRefs[0].value = days;
    inputRefs[1].value = days * 24;
    inputRefs[2].value = days * 24 * 60;
    inputRefs[3].value = days * 24 * 60 * 60;
  }
}

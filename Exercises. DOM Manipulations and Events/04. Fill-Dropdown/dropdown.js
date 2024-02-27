function addItem() {
  let textInput = document.getElementById("newItemText");
  let valueInput = document.getElementById("newItemValue");
  let selectMenu = document.getElementById("menu");

  let optionEl = document.createElement("option");
  optionEl.textContent = textInput.value;
  optionEl.value = valueInput.value;

  if (optionEl.value != "" && optionEl.textContent != "") {
    selectMenu.appendChild(optionEl);
  }
  
  textInput.value = "";
  valueInput.value = "";
}

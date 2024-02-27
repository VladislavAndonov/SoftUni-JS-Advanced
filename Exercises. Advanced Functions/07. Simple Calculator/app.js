function calculator() {
  let num1Selector;
  let num2Selector;
  let resultSelector;

  function init(selector1, selector2, resultSel) {
    num1Selector = document.querySelector(selector1);
    num2Selector = document.querySelector(selector2);
    resultSelector = document.querySelector(resultSel);
  }

  function add() {
    const num1 = parseFloat(num1Selector.value) || 0;
    const num2 = parseFloat(num2Selector.value) || 0;
    const sum = num1 + num2;
    resultSelector.value = sum;
  }

  function subtract() {
    const num1 = parseFloat(num1Selector.value) || 0;
    const num2 = parseFloat(num2Selector.value) || 0;
    const difference = num1 - num2;
    resultSelector.value = difference;
  }

  return {
    init: init,
    add: add,
    subtract: subtract,
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");

function counter() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}
let result = counter();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

function calc() {
  let num1 = 4;
  let num2 = 6;
  return function () {
    let sum = num1 + num2;
    return sum;
  };
}
let sum = calc();
console.log(sum());

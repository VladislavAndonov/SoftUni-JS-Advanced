function sameNums(num) {
  let numToStr = num.toString();
  let isSame = true;
  let sum = Number(numToStr[0]);
  for (let i = 1; i < numToStr.length; i++) {
    if (numToStr[i] != numToStr[i - 1]) {
      isSame = false;
    }
    sum += Number(numToStr[i]);
  }
  console.log(isSame);
  console.log(sum);
}
sameNums(2222222);

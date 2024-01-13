function strLength(str1, str2, str3) {
  let lettersSum = str1.length + str2.length + str3.length;
  let avgLength = Math.trunc(lettersSum / 3);
  console.log(lettersSum);
  console.log(avgLength);
}
strLength("chocolate", "ice cream", "cake");

function add(number) {
  let currentSum = number;

  function innerAdd(nextNumber) {
    currentSum += nextNumber;
    return innerAdd;
  }

  innerAdd.toString = function () {
    return currentSum;
  };

  return innerAdd;
}

add(1);
add(1)(6)(-3);
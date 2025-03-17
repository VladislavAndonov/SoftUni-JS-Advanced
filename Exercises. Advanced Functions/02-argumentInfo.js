// function argInfo(...argArr) {
//   let result = {};
//   for (let arg of argArr) {
//     let type = typeof arg;
//     console.log(`${type}: ${arg}`);
//     if (!result.hasOwnProperty(type)) {
//       result[type] = 0;
//     }
//     result[type] += 1;
//   }
//   let sortedResult = Object.entries(result).sort((a, b) => b[1] - a[1]);

//   for (let [type, count] of sortedResult) {
//     console.log(`${type} = ${count}`);
//   }
// }
// argInfo("cat", 42, function () {
//   console.log("Hello world!");
// });

function solve(...arg) {
  let info = {};

  for (el of arg) {
    function checkType() {
      return typeof el;
    }
    const type = checkType();

    console.log(`${type}: ${el}`);

    if (!info.hasOwnProperty(type)) {
      info[type] = 1;
    } else {
      info[type] += 1;
    }
  }

  const sortedInfo = Object.entries(info).sort((a, b) => b[1] - a[1]);

  for (el of sortedInfo) {
    console.log(`${el[0]} = ${el[1]}`);
  }
}

solve(
  "cat",
  42,
  function () {
    console.log("Hello world!");
  },
  43434
);
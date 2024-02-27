function solve() {
  let text = document.getElementById("text").value;
  let namingCovention = document.getElementById("naming-convention").value;
  let result = "";
  let textArr = text.split(" ").map((el) => el.toLowerCase());
  if (namingCovention == "Pascal Case") {
    for (let i = 0; i < textArr.length; i++) {
      textArr[i] = textArr[i].replace(
        textArr[i][0],
        textArr[i][0].toUpperCase()
      );
      result += textArr[i];
    }
  } else if (namingCovention == "Camel Case") {
    result += textArr[0];
    for (let i = 1; i < textArr.length; i++) {
      textArr[i] = textArr[i].replace(
        textArr[i][0],
        textArr[i][0].toUpperCase()
      );
      result += textArr[i];
    }
  } else {
    result = "Error!";
  }
  document.getElementById("result").textContent = result;
}

// function solve2(text, namingCovention) {
//   let result = "";
//   let textArr = text.split(" ").map((el) => el.toLowerCase());
//   if (namingCovention == "Pascal Case") {
//     for (let i = 0; i < textArr.length; i++) {
//       textArr[i] = textArr[i].replace(
//         textArr[i][0],
//         textArr[i][0].toUpperCase()
//       );
//       result += textArr[i];
//     }
//   } else if (namingCovention == "Camel Case") {
//     result += textArr[0];
//     for (let i = 1; i < textArr.length; i++) {
//       textArr[i] = textArr[i].replace(
//         textArr[i][0],
//         textArr[i][0].toUpperCase()
//       );
//       result += textArr[i];
//     }
//   } else {
//     result = "Error!";
//   }
//   console.log(result);
// }
// solve2("this is an example", "Pascal Case");

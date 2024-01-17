function pieceOfPie(arr, str1, str2) {
  let startIdx = arr.indexOf(str1);
  let endIdx = arr.indexOf(str2);

  let newArr = arr.slice(startIdx, endIdx + 1);
  return newArr;
}
// pieceOfPie(
//   [
//     "Pumpkin Pie",
//     "Key Lime Pie",
//     "Cherry Pie",
//     "Lemon Meringue Pie",
//     "Sugar Cream Pie",
//   ],
//   "Key Lime Pie",
//   "Lemon Meringue Pie"
// );

pieceOfPie(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);

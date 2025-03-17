// function sortArray(arr, sortOrder) {
//   if (sortOrder == "asc") {
//     arr.sort((a, b) => a - b);
//   } else {
//     arr.sort((a, b) => b - a);
//   }
//   return arr;
// }
// sortArray([14, 7, 17, 6, 8], "asc");

function solve(arr, sorting) {
    function sortArr() {
        return sorting == "asc"
            ? arr.sort((a, b) => a - b)
            : arr.sort((a, b) => b - a);
    }
    sortArr();

    return arr;
}

solve([14, 7, 17, 6, 8], "asc")
solve([14, 7, 17, 6, 8], "desc");

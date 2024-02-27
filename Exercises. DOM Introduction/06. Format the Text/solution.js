function solve() {
  let text = document.getElementById("input").value;
  let resultRef = document.getElementById("output");
  resultRef.innerHTML = "";
  let arrText = text.split(".").filter((x) => x.length > 0);
 
  for (let i = 0; i < arrText.length; i += 3) {
    let res = [];
    for (let y = 0; y < 3; y++) {
      if (arrText[i + y]) {
        res.push(arrText[i + y]);
      }
    }
    let resultText = res.join(". ") + ".";
    resultRef.innerHTML += `<p>${resultText}</p>`;
  }
}
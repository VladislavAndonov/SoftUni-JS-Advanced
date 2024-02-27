function search() {
  const towns = Array.from(document.querySelectorAll("ul li"));
  let searchText = document.getElementById("searchText").value;
  let matches = 0;

  for (let town of towns) {
    if (town.textContent.includes(searchText)) {
      town.style.textDecoration = "underline";
      town.style.fontWeight = "bold";
      matches++;
    } else {
      town.style.textDecoration = "none";
      town.style.fontWeight = "normal";
    }
  }
  document.getElementById("result").textContent = `${matches} matches found`;
}

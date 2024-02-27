function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);
  let searchFieldRef = document.getElementById("searchField");
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  function onClick() {
    let searchText = searchFieldRef.value;
    for (let row of rows) {
      const tableData = Array.from(row.querySelectorAll("td"));
      for (let data of tableData) {
        if (data.textContent.includes(searchText)) {
          row.classList.add("select");
          break;
        } else {
          row.classList.remove("select");
        }
      }
    }
    searchFieldRef.value = "";
  }
}

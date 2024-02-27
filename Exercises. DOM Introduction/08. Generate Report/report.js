function generateReport() {
    let outputEl = document.querySelector("#output");
    let result = [];
    let checks = Array.from(document.querySelectorAll("thead tr th input"));
    let trs = Array.from(document.querySelectorAll("tbody tr"));
   
    trs.forEach((row) => {
      let current = {};
      Array.from(row.querySelectorAll("td")).forEach((x, i) => {
        if (checks[i].checked) {
          current[checks[i].name] = x.textContent;
        }
      });
      result.push(current);
    });
    outputEl.value = JSON.stringify(result);
  }
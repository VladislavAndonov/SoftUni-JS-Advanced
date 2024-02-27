function create(words) {
  const contentRef = document.getElementById("content");
  for (let word of words) {
    let divEl = document.createElement("div");
    contentRef.appendChild(divEl);
    let pEl = document.createElement("p");
    divEl.appendChild(pEl);
    divEl.addEventListener("click", onClick);
    pEl.textContent = word;
    pEl.style.display = "none";
  }
  function onClick(event) {
    let target = event.currentTarget;
    let children = target.children;
    let p = children[0];
    p.style = "block";
  }
}

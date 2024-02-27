window.addEventListener("load", solve);

function solve() {
  const addBtn = document.querySelector(".add-btn");

  addBtn.addEventListener("click", function (event) {
    event.preventDefault();

    let snowmanName = document.getElementById("snowman-name").value.trim();
    let snowmanHeight = document.getElementById("snowman-height").value.trim();
    let location = document.getElementById("location").value.trim();
    let creator = document.getElementById("creator-name").value.trim();
    let specialAttribute = document
      .getElementById("special-attribute")
      .value.trim();

    if (
      snowmanName === "" ||
      snowmanHeight === "" ||
      location === "" ||
      creator === "" ||
      specialAttribute === ""
    ) {
      return;
    }

    let snowmanPreviewList = document.querySelector(".snowman-preview");

    let snowmanInfo = document.createElement("li");
    snowmanInfo.classList.add("snowman-info");

    let article = document.createElement("article");
    article.innerHTML = `
            <p><strong>Name:</strong> ${snowmanName}</p>
            <p><strong>Height:</strong> ${snowmanHeight} cm</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Creator:</strong> ${creator}</p>
            <p><strong>Attribute:</strong> ${specialAttribute}</p>
        `;

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.classList.add("next-btn");

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    snowmanInfo.appendChild(article);
    snowmanInfo.appendChild(btnContainer);

    snowmanPreviewList.appendChild(snowmanInfo);

    document.getElementById("snowman-name").value = "";
    document.getElementById("snowman-height").value = "";
    document.getElementById("location").value = "";
    document.getElementById("creator-name").value = "";
    document.getElementById("special-attribute").value = "";

    addBtn.disabled = true;
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")) {
      let snowmanInfo = event.target.closest(".snowman-info");
      let inputs = document.querySelectorAll(".snowman input");

      let snowmanName = snowmanInfo
        .querySelector("p:nth-child(1)")
        .textContent.split(": ")[1];
      let snowmanHeight = snowmanInfo
        .querySelector("p:nth-child(2)")
        .textContent.split(": ")[1];
      let location = snowmanInfo
        .querySelector("p:nth-child(3)")
        .textContent.split(": ")[1];
      let creator = snowmanInfo
        .querySelector("p:nth-child(4)")
        .textContent.split(": ")[1];
      let specialAttribute = snowmanInfo
        .querySelector("p:nth-child(5)")
        .textContent.split(": ")[1];

      inputs[0].value = snowmanName;
      inputs[1].value = snowmanHeight;
      inputs[2].value = location;
      inputs[3].value = creator;
      document.getElementById("special-attribute").value = specialAttribute;

      let addBtn = document.querySelector(".add-btn");
      addBtn.disabled = false;

      snowmanInfo.remove();
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("next-btn")) {
      let snowmanPreviewList = document.querySelector(".snowman-preview");
      let snowList = document.querySelector(".snow-list");

      let snowmanInfo = snowmanPreviewList.innerHTML;

      let snowmanListItem = document.createElement("li");
      snowmanListItem.classList.add("snowman-content");

      let article = document.createElement("article");
      article.innerHTML = snowmanInfo;

      let sendBtn = document.createElement("button");
      sendBtn.textContent = "Send";
      sendBtn.classList.add("send-btn");

      article.appendChild(sendBtn);
      snowmanListItem.appendChild(article);

      snowList.appendChild(snowmanListItem);
      snowmanPreviewList.innerHTML = "";
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("send-btn")) {
      let mainElement = document.querySelector("main");
      mainElement.remove();

      let backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      backBtn.classList.add("back-btn");
      document.body.appendChild(backBtn);

      let backImg = document.getElementById("back-img");
      backImg.removeAttribute("hidden");
    }
  });

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("back-btn")) {
      location.reload();
    }
  });
}

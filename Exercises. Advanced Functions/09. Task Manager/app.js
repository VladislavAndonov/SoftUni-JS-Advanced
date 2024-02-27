function solve() {
  const formRef = document.querySelector("form");
  const [addTask, openTask, inProgress, complete] =
    document.querySelectorAll("section");
  formRef.addEventListener("submit", onSubmitHandler);

  // Object with methods for creating buttons and appending them
  btnHandlerEnum = {
    start: function (event) {
      // Get reference to the current article
      let currentArticle = event.target.parentElement.parentElement;
      // Remove the "Start" button
      removeBtn(event.target.parentElement);
      // Create "Delete" and "Complete" buttons
      currentArticle.innerHTML += getBtnPartial(
        { classes: "red", text: "Delete" },
        { classes: "orange", text: "Complete" }
      );
      //
      let btns = currentArticle.querySelectorAll("button");
      //add event to them
      addEventListenerToButton(btns);
      // Append the current article to the "inProgress" section
      inProgress.children[1].appendChild(currentArticle);
    },

    complete: function (event) {
      // Get reference to the current article
      let currentArticle = event.target.parentElement.parentElement;
      // Remove the "Finish" button
      removeBtn(event.target.parentElement);
      // Move the current article to the "complete" section
      complete.children[1].appendChild(currentArticle);

      removeBtn(event.target.parentElement);
    },

    delete: function (event) {
      // Remove the parent of the button (the article)
      event.target.parentElement.parentElement.remove();
    },
  };

  function onSubmitHandler(event) {
    //prevent default behavior of the form element
    event.preventDefault();
    //get form elements
    let formElements = event.target.elements;
    let taskName = formElements[0].value;
    let desc = formElements[1].value;
    let date = formElements[2].value;

    //validate elements
    if (!taskName || !desc || !date) {
      return;
    }
    //create an article
    createArticle(taskName, desc, date);
    //clear inputs after creation
    clearForm(formElements);
  }

  function createArticle(name, desc, date) {
    //create mew article
    let newArticle = document.createElement("article");
    newArticle.innerHTML = getArticleTemp(name, desc, date);
    //append created article
    openTask.children[1].appendChild(newArticle);
    //add eventlisteners to the buttons
    let btns = newArticle.querySelectorAll("button");
    addEventListenerToButton(btns);
  }

  function clearForm(formElements) {
    //clear all inputs
    formElements[0].value = "";
    formElements[1].value = "";
    formElements[2].value = "";
  }

  function clickHandler(event) {
    //get action according to the button
    let currentAction = event.target.innerText.toLowerCase();
    btnHandlerEnum[currentAction](event);
  }
  function addEventListenerToButton(btns) {
    //add eventlisteners for every button
    Array.from(btns).forEach((btn) =>
      btn.addEventListener("click", clickHandler)
    );
  }

  function getArticleTemp(name, desc, date) {
    //article template
    return (
      `<h3>${name}</h3>` +
      `<p>Description: ${desc}</p>` +
      `<p>Due Date: ${date}</p>` +
      getBtnPartial(
        { classes: "green", text: "Start" },
        { classes: "red", text: "Delete" }
      )
    );
  }
  function getBtnPartial(btn1, btn2) {
    return (
      `<div class="flex">` +
      `<button class=${btn1.classes}>${btn1.text}</button>` +
      `<button class=${btn2.classes}>${btn2.text}</button>` +
      `</div>`
    );
  }

  function removeBtn(target) {
    target.remove();
  }
}

// function solve() {
//     const formRef = document.querySelector("form");
//     const [addTask, openTask, inProgress, complete] =
//       document.querySelectorAll("section");
//     formRef.addEventListener("submit", onSubmitHandler);

//     // Object with methods for creating buttons and appending them
//     btnHandlerEnum = {
//       start: function (event) {
//         // Get reference to the current article
//         let currentArticle = event.target.parentElement.parentElement;
//         // Remove the "Start" button
//         removeBtn(event.target.parentElement);
//         // Create "Delete" and "Complete" buttons
//         currentArticle.innerHTML += getBtnPartial(
//           { classes: "red", text: "Delete" },
//           { classes: "orange", text: "Complete" }
//         );
//         //
//         let btns = currentArticle.querySelectorAll("button");
//         // Add event to them
//         addEventListenerToButton(btns);
//         // Append the current article to the "inProgress" section
//         inProgress.children[1].appendChild(currentArticle);
//       },

//       finish: function (event) {
//         // Get reference to the current article
//         let currentArticle = event.target.parentElement.parentElement;
//         // Move the current article to the "complete" section
//         complete.children[1].appendChild(currentArticle);
//         // Remove the "Complete" button
//         removeBtn(event.target.parentElement);
//       },

//       delete: function (event) {
//         // Remove the parent of the button (the article)
//         event.target.parentElement.parentElement.remove();
//       },
//     };

//     function onSubmitHandler(event) {
//       // Prevent default behavior of the form element
//       event.preventDefault();
//       // Get form elements
//       let formElements = event.target.elements;
//       let taskName = formElements[0].value;
//       let desc = formElements[1].value;
//       let date = formElements[2].value;

//       // Validate elements
//       if (!taskName || !desc || !date) {
//         return;
//       }
//       // Create an article
//       createArticle(taskName, desc, date);
//       // Clear inputs after creation
//       clearForm(formElements);
//     }

//     function createArticle(name, desc, date) {
//       // Create new article
//       let newArticle = document.createElement("article");
//       newArticle.innerHTML = getArticleTemp(name, desc, date);
//       // Append created article
//       openTask.children[1].appendChild(newArticle);
//       // Add event listeners to the buttons
//       let btns = newArticle.querySelectorAll("button");
//       addEventListenerToButton(btns);
//     }

//     function clearForm(formElements) {
//       // Clear all inputs
//       formElements[0].value = "";
//       formElements[1].value = "";
//       formElements[2].value = "";
//     }

//     function clickHandler(event) {
//       // Get action according to the button
//       let currentAction = event.target.innerText.toLowerCase();
//       btnHandlerEnum[currentAction](event);
//     }
//     function addEventListenerToButton(btns) {
//       // Add event listeners for every button
//       Array.from(btns).forEach((btn) =>
//         btn.addEventListener("click", clickHandler)
//       );
//     }

//     function getArticleTemp(name, desc, date) {
//       // Article template
//       return (
//         `<h3>${name}</h3>` +
//         `<p>Description: ${desc}</p>` +
//         `<p>Due Date: ${date}</p>` +
//         getBtnPartial(
//           { classes: "green", text: "Start" },
//           { classes: "red", text: "Delete" }
//         )
//       );
//     }
//     function getBtnPartial(btn1, btn2) {
//       return (
//         `<div class="flex">` +
//         `<button class="${btn1.classes}">${btn1.text}</button>` +
//         `<button class="${btn2.classes}">${btn2.text}</button>` +
//         `</div>`
//       );
//     }

//     function removeBtn(target) {
//       target.remove();
//     }
//   }

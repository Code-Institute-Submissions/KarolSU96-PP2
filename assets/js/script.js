// declaring variables
let input = document.getElementById("new-task");
let addButton = document.getElementById("add-button");
let ul = document.getElementsByTagName("ul");

// function that takes the value from input field and puts it as a new task
addButton.addEventListener("click", function () {
  let task = input.value;

  // If the task has no value it should prompt user to write something
  if (!task) {
    alert("Please enter your tast before adding it");
  } else {
    let li = document.createElement("li");

    let deleteButton = document.createElement("button");
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");

    deleteButton.appendChild(deleteIcon);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    li.appendChild(deleteButton);
    li.appendChild(editButton);

    li.textContent = task;

    ul[0].appendChild(li);

    input.value = "";
  }
});

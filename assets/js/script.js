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

    document.body.appendChild(li);

    let deleteButton = document.createElement("button");
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-xmark");

    deleteButton.appendChild(deleteIcon);

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    editButton.setAttribute("class", "edit-button");
    deleteButton.setAttribute("class", "delete-button");

    li.textContent = task;
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    ul[0].appendChild(li);

    input.value = "";
  }
});

/* deleteting the notes. Method searsched for class "delete-button"
 if the element with this class is clicked it removes its parent li element. */
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    let listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();
    }
  }
});

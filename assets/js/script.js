// declaring variables
let input = document.getElementById("new-task");
let addButton = document.getElementById("add-button");
let ul = document.getElementsByTagName("ul")[0];

// function that takes the value from input field and puts it as a new task
addButton.addEventListener("click", function () {
  let task = input.value;

  // If the task has no value it should prompt user to write something
  if (!task) {
    alert("Please enter your task before adding it");
    return;
  }
  if (ul.childElementCount >= 13) {
    alert("You have reached the maximum number of tasks");
    return; // Stop execution if the maximum limit is reached
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
    ul.appendChild(li);

    input.value = "";
    addTasksCounter();
  }
});

/* deleteting the notes. Method searches for class "delete-button"
 if the element with this class is clicked it removes its parent li element. */
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    let listItem = event.target.closest("li");
    if (listItem) {
      listItem.remove();
      decreaseTasksCounter();
    } /* else if edit-button is cliked- it prompts user to enter a new text.
        Ensures that there are no whilespaces and replaces the task with prompted text. */
  } else if (event.target.classList.contains("edit-button")) {
    let listItem = event.target.closest("li");
    if (listItem) {
      let text = listItem.firstChild.textContent.trim();
      let newText = prompt("Enter new text:", text);
      //modifies text content only if user  writes something. Won't engage if there's nothing written.
      if (newText !== null && newText.trim() !== "") {
        listItem.firstChild.textContent = newText;
      }
    }
  }
});

// clicking on a li element crosses it out, marking completed task
ul.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

// Adds tasks to the couner
function addTasksCounter() {
  let oldTaskNumber = parseInt(
    document.getElementById("tasks-number").innerText
  );
  document.getElementById("tasks-number").innerText = ++oldTaskNumber;
}

// Deletes task number from the counter
function decreaseTasksCounter() {
  let oldTaskNumber = parseInt(
    document.getElementById("tasks-number").innerText
  );
  document.getElementById("tasks-number").innerText = --oldTaskNumber;
}

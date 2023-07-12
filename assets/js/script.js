let input = document.getElementById("new-task");
let addButton = document.getElementById("add-button");
let ul = document.getElementsByTagName("ul");

addButton.addEventListener("click", function () {
  let task = input.value;

  if (!task) {
    alert("Please enter your tast before adding it");
  } else {
    let li = document.createElement("li");

    li.textContent = task;

    ul[0].appendChild(li);

    input.value = "";
  }
});

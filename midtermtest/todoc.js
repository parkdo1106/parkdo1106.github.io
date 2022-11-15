var addButton = document.getElementById("add_button");
var ul = document.querySelector("ul");
var input = document.getElementById("entry_box");
var clearBtn = document.getElementById("clear");
var saveBtn = document.getElementById("save");
var emptyBtn = document.getElementById("empty");


function newToDoItem() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

function addToDoItem() {
  if (inputLength() > 0) {
    newToDoItem();
  }
}

function keyPressEvent(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    newToDoItem();
  }
}

function toggleToDoItemState(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
}


addButton.addEventListener("click", addToDoItem);
//clearBtn.addEventListener("click", clearCompletedToDoItems);
ul.addEventListener("dblclick", toggleToDoItemState);
input.addEventListener("keypress", keyPressEvent);
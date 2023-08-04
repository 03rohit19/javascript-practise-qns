var button = document.getElementById("enter");
var input = document.getElementById("user-input");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function addListElements() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
}

button.addEventListener("click", function () {
  if (inputLength() > 0) {
    addListElements();
  }
});

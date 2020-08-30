// var h = document.createElement("h2");
// var myvalue = document.createTextNode("Hello World!");
// h.appendChild(myvalue);
// document.querySelector("h2").appendChild(h);
var ul = document.getElementById("list");
var li;

var deleteAllButton = document.getElementById("delete");
deleteAllButton.addEventListener("click", deleteAll);

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

function addItem() {
  var input = document.getElementById("input");
  var item = input.value;
  ul = document.getElementById("list");
  var textNode = document.createTextNode(item);

  if (item == "") {
    return false;
  } else {
    //create li
    li = document.createElement("li");

    //create checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("id", "check");

    //create label
    var label = document.createElement("label");

    //add these elements on web page
    label.appendChild(textNode);
    li.appendChild(checkBox);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);

    setTimeout(() => {
      li.className = "visual";
    }, 2);
    input.value = "";
  }
}
function deleteAll() {
  ul.innerHTML = "";
}
function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    while (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
    }
  }
}

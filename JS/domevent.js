// JavaScript source code
function drag(event) {
    event.preventDefault();
    alert("OnDrag event");
}

function click(event) {
    alert("click");
}

function clickRemove(event) {
    var div = document.getElementById("div2");
    div.removeEventListener("click", click);
}

var div2 = document.getElementById("div2");
div2.addEventListener("click", click);


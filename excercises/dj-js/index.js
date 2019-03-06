let square = document.querySelector(".square");
let body = document.body;

square.addEventListener("mouseenter", squareHover);
square.addEventListener("mouseleave", mouseLeave);
square.addEventListener("mousedown", squareMouseDown);
square.addEventListener("mouseup", squareMouseUp);
square.addEventListener("dblclick", squareDblClick);
document.addEventListener("keydown", squareKey);
document.addEventListener("wheel", mouseWheel);

function squareHover() {
  square.style.backgroundColor = "blue";
}
function squareMouseDown() {
  square.style.backgroundColor = "red";
}
function squareMouseUp() {
  square.style.backgroundColor = "yellow";
}
function squareDblClick() {
  square.style.backgroundColor = "green";
}
function mouseWheel() {
  square.style.backgroundColor = "orange";
}
function mouseLeave() {
  square.style.backgroundColor = "black";
}
function squareKey(e) {
  if (e.which === 82) {
    square.style.backgroundColor = "red";
  } else if (e.which === 66) {
    square.style.backgroundColor = "blue";
  } else if (e.which === 71) {
    square.style.backgroundColor = "green";
  } else if (e.which === 89) {
    square.style.backgroundColor = "yellow";
  } else if (e.which === 79) {
    square.style.backgroundColor = "orange";
  }
}

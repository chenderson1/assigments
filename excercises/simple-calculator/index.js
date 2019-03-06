//grab all inputs
const addValueOne = document.querySelector(".add-1");
const addValueTwo = document.querySelector(".add-2");
const subValueOne = document.querySelector(".sub-1");
const subValueTwo = document.querySelector(".sub-2");
const multiValueOne = document.querySelector(".multi-1");
const multiValueTwo = document.querySelector(".multi-2");
// grab all buttons
const addBtn = document.querySelector(".add");
const subBtn = document.querySelector(".sub");
const multiBtn = document.querySelector(".multi");
const clrBtn = document.querySelector(".clr-btn");
//grab result div
const resultDiv = document.querySelector(".result h2");

//=================================event listners
addBtn.addEventListener("click", addition);
subBtn.addEventListener("click", subtraction);
multiBtn.addEventListener("click", multiplication);
clrBtn.addEventListener("click", clearResult);

//===================================event functions
function addition(e) {
  e.preventDefault();
  resultDiv.innerHTML =
    parseInt(addValueOne.value) + parseInt(addValueTwo.value);
  addValueOne.value = "";
  addValueTwo.value = "";
}

function subtraction(e) {
  e.preventDefault();
  resultDiv.innerHTML =
    parseInt(subValueOne.value) - parseInt(subValueTwo.value);
  subValueOne.value = "";
  subValueTwo.value = "";
}

function multiplication(e) {
  e.preventDefault();
  resultDiv.innerHTML =
    parseInt(multiValueOne.value) * parseInt(multiValueTwo.value);
  multiValueOne.value = "";
  multiValueTwo.value = "";
}
function clearResult(e) {
  e.preventDefault();
  resultDiv.innerHTML = "";
}

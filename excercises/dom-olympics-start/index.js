//header variables

let header = document.createElement("header");
let headerH1 = document.createElement("h1");
let headerParagraph = document.createElement("p");
let headerSpan = document.createElement("span");

//create h1 text
headerH1.innerText = "Javascript Made This!!";
//create header p text
headerParagraph.innerText = "wrote the Javascript";
//append h1 and para to header element
header.appendChild(headerH1);
header.appendChild(headerParagraph);
//prepend header element to document
document.body.prepend(header);
//header span
headerSpan.innerText = "Kanye ";
headerSpan.className = "name";
//prepend to headerParagraph
headerParagraph.prepend(headerSpan);
//h1 classname
header.className = "header";

// =============================================================Bronze
//grab convo text
let leftConvoOne = document.querySelector(".messages > .left ");
let leftConvoTwo = document.querySelector(".messages > .left ~ .left");
let rightConvoOne = document.querySelector(".messages > .right");
let rightConvoTwo = document.querySelector(".messages > .right ~ .right");
let clearButton = document.querySelector("#clear-button");
let messages = document.querySelectorAll(".message");

//change convo text
leftConvoOne.innerText = "I got an A in class";
rightConvoOne.innerText = "WTF, well done!";
leftConvoTwo.innerText = "Mom what do you think WTF means?";
rightConvoTwo.innerText = "Well thats fantastic...";

//clear butotn event handler
clearButton.addEventListener("click", clearConvos);

//clear convos
function clearConvos() {
  messages.forEach(message => {
    message.innerText = "";
  });
}
// ==============================================================silver
let dropdown = document.querySelector("#theme-drop-down");

//dropdown event handler
dropdown.addEventListener("change", changeTheme);

//dropdown theme change
function changeTheme() {
  messages.forEach(message => {
    if (message.classList.contains("theme-one")) {
      message.classList.add(dropdown.selectedOptions[0].value);
      message.classList.remove("theme-one");
    } else if (message.classList.contains("theme-two")) {
      message.classList.add(dropdown.selectedOptions[0].value);
      message.classList.remove("theme-two");
    }
  });
}

// ===================================================================gold
// add messages using form
//ceate a div
let formDiv = document.createElement("div");
//grab input
let input = document.querySelector("form input");
//form button
let formButton = document.querySelector("form button");

//button click event handler
formButton.addEventListener("click", addMessage);

//add message
function addMessage(e) {
  const userMessage = input.value;
  //set div as user input
  formDiv.textContent = "";

  e.preventDefault();
}

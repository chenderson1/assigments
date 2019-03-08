const readline = require("readline-sync");

//math functions
function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}
function divide(num1, num2) {
  return Number(num1) / Number(num2);
}
function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}
//number object
const calcObj = {};

function start() {
  //collect valuestartd from user
  calcObj.num1 = readline.question("Please enter your first number ?");
  calcObj.num2 = readline.question("Please enter your second number ?");

  calculate();
  //display result
  console.log(calcObj.result);

  calcObj.playAgain = readline.keyInYN("Would you like another operation ?");
  if (calcObj.playAgain) start();
}

function calculate() {
  //collect operation
  calcObj.operation = readline.question(
    "Please enter the operation to perform: (add, sub, mul, div) ?"
  );

  if (calcObj.operation === "add")
    calcObj.result = add(calcObj.num1, calcObj.num2);
  else if (calcObj.operation === "sub")
    calcObj.result = subtract(calcObj.num1, calcObj.num2);
  else if (calcObj.operation === "mul")
    calcObj.result = multiply(calcObj.num1, calcObj.num2);
  else if (calcObj.operation === "div")
    calcObj.result = divide(calcObj.num1, calcObj.num2);
}

start();

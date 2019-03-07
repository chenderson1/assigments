//grab inputs
let goombaInput = document.querySelector(".goomba-input");
let bobInput = document.querySelector(".bob-input");
let cheepInput = document.querySelector(".cheep-input");
//grab results div
let resultsDiv = document.querySelector(".resultDiv h2");
//grab btn
let submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", addTotal);

function addTotal(e) {
  e.preventDefault();
  resultsDiv.innerHTML = ``;
  //define values
  let goombaTotal = Number(goombaInput.value) * 5;
  let bobTotal = Number(bobInput.value) * 7;
  let cheepTotal = Number(cheepInput.value) * 11;
  //calculate total
  const totalPrice = goombaTotal + bobTotal + cheepTotal;
  //display total
  resultsDiv.innerHTML = `${totalPrice} COINS`;

  //clear inputs
  goombaInput.value = "";
  bobInput.value = "";
  cheepInput.value = "";
}

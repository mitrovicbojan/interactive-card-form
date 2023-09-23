// let cardNumInput = document.getElementById("num-input");
const cardNumOutput = document.getElementById("card-front-number");
const noNumInput = document.getElementById("no-num-input");
const noExpYear = document.getElementById("no-exp-year");
const noCvcNum = document.getElementById("no-cvc-num");
const cardName = document.getElementById("card-name");
const expYear = document.getElementById("exp-month");
const expMonth = document.getElementById("exp-month");
const cvc = document.getElementById("card-back-cvc");
noExpYear.style.display = "None";
noNumInput.style.display = "None";
noCvcNum.style.display = "None";

function func() {
  let cardNumInput = document.getElementById("num-input-first");

  let card = cardNumInput.value;

  cardNumOutput.innerText = card;
}

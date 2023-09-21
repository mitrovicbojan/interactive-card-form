// let cardNumInput = document.getElementById("num-input");
const cardNumOutput = document.getElementById("card-front-number");
const noNumInput = document.getElementById("no-num-input");
const noExpYear = document.getElementById("no-exp-year");
const noCvcNum = document.getElementById("no-cvc-num");

noExpYear.style.display = "None";
noNumInput.style.display = "None";
noCvcNum.style.display = "None";

function func() {
  let cardNumInput = document.getElementById("num-input-first");
  console.log(cardNumInput);
  let card = cardNumInput.value;
  console.log(card);
  let helloCard = card;
  cardNumOutput.innerText = helloCard;
  console.log(cardNumOutput);
}

const cardNumInput = document.getElementsByClassName(".num-input");
const cardNumOutput = document.getElementById("card-front-number");
const noNumInput = document.getElementById("no-num-input");
const noExpYear = document.getElementById("no-exp-year");
const noCvcNum = document.getElementById("no-cvc-num");

noExpYear.style.display = "None";
noNumInput.style.display = "None";
noCvcNum.style.display = "None";

function func() {
  let helloCard = "4566 7899 1233";
  cardNumOutput.innerText = helloCard;
  console.log(cardNumOutput);
}

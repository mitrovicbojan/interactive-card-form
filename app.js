// let cardNumInput = document.getElementById("num-input");
const cardNumOutput = document.getElementById("card-front-number");
const noNumInput = document.getElementById("no-num-input");
const noExpYear = document.getElementById("no-exp-year");
const noCvcNum = document.getElementById("no-cvc-num");
const cardName = document.getElementById("card-name");
const cardFrontName = document.getElementById("card-front-name");
const expYear = document.getElementById("exp-year");
const expYearOutput = document.getElementById("year");
const expMonth = document.getElementById("exp-month");
const expMonthOutput = document.getElementById("month");
const cvc = document.getElementById("card-back-cvc");
const cvcInput = document.getElementById("cvc-num");
let cardNumInput = document.getElementById("num-input-first");
noExpYear.style.display = "None";
noNumInput.style.display = "None";
noCvcNum.style.display = "None";

$(cardNumInput).on("keypress change", function () {
  $(this).val(function (index, value) {
    return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  });
});

function func() {
  let num = cardNumInput.value;
  console.log(num);
  let testNum = /[a-zA-Z]/;
  let result = testNum.test(num);
  console.log(result);
  if (result != true) {
    noNumInput.style.display = "None";
  } else {
    noNumInput.style.display = "Block";
  }
  cardNumOutput.innerText = cardNumInput.value;
  cardFrontName.innerText = cardName.value;
  expYearOutput.innerText = expYear.value;
  expMonthOutput.innerText = expMonth.value;
  cvc.innerText = cvcInput.value;
}

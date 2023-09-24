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
let containerForm = document.getElementById("container-form");
noExpYear.style.display = "None";
noNumInput.style.display = "None";
noCvcNum.style.display = "None";
let hello = document.getElementById("confirmation");

$(cardNumInput).on("keypress change", function () {
  $(this).val(function (index, value) {
    return value.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ");
  });
});

function func() {
  hello.style.display = "Block";
  cardFrontName.innerText = cardName.value;
  let num = cardNumInput.value;
  let testNum = /[a-zA-Z]/;
  let result = testNum.test(num);
  if (result != false) {
    noNumInput.style.display = "Block";
    cardNumInput.classList.add("borderColor");
    hello.style.display = "None";
  } else {
    cardNumOutput.innerText = cardNumInput.value;
  }
  if (expMonth.value == "") {
    noExpYear.style.display = "Block";
    expMonth.classList.add("borderColor");
    hello.style.display = "None";
  } else {
    expMonthOutput.innerText = expMonth.value;
  }
  if (expYear.value == "") {
    noExpYear.style.display = "Block";
    expYear.classList.add("borderColor");
    hello.style.display = "None";
  } else {
    expYearOutput.innerText = expYear.value;
  }
  if (cvcInput.value == "") {
    noCvcNum.style.display = "Block";
    cvcInput.classList.add("borderColor");
    hello.style.display = "None";
  } else {
    cvc.innerText = cvcInput.value;
  }
}

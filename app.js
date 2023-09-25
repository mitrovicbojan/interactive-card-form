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
  cardFrontName.innerText = cardName.value;
  let num = cardNumInput.value;
  let testNum = /[a-zA-Z]/;
  let result = testNum.test(num);
  let cardVal = false;
  let monthVal = false;
  let yearVal = false;
  let cvcVal = false;
  if (result != false) {
    noNumInput.style.display = "Block";
    cardNumInput.classList.add("borderColor");

    cardVal = false;
  } else {
    cardNumOutput.innerText = cardNumInput.value;
    cardVal = true;
  }
  if (expMonth.value == "") {
    noExpYear.style.display = "Block";
    expMonth.classList.add("borderColor");
    monthVal = false;
  } else {
    expMonthOutput.innerText = expMonth.value;
    monthVal = true;
  }
  if (expYear.value == "") {
    noExpYear.style.display = "Block";
    expYear.classList.add("borderColor");
    yearVal = false;
  } else {
    expYearOutput.innerText = expYear.value;
    yearVal = true;
  }
  if (cvcInput.value == "") {
    noCvcNum.style.display = "Block";
    cvcInput.classList.add("borderColor");
    cvcVal = false;
  } else {
    cvc.innerText = cvcInput.value;
    cvcVal = true;
  }

  if (
    cardVal === true &&
    yearVal === true &&
    monthVal === true &&
    cvcVal === true
  ) {
    hello.style.display = "Block";
    containerForm.style.display = "None";
  }
}

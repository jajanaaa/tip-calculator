"use strict";

// Create variables
const button5 = document.querySelector("#button-5");
const button10 = document.querySelector("#button-10");
const button15 = document.querySelector("#button-15");
const button25 = document.querySelector("#button-25");
const button50 = document.querySelector("#button-50");
// let numberOfPeople = document.querySelector("#number-of-people").value;
let tipAmount = document.querySelector("#tip-amount");
let total = document.querySelector("#total");
const calculateButton = document.querySelector("#calculate-button");
const resetButton = document.querySelector("#reset-button");
const zeroEvaluation = document.querySelector(".zero-evaluation");
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// Calculate tip function
let bill;
let tip;
let selectTip;

button5.addEventListener("click", function () {
  selectTip = 0.05;
  button5.classList.toggle("active");
});

button10.addEventListener("click", function () {
  selectTip = 0.1;
  console.log(selectTip);
  button10.classList.toggle("active");
});

button15.addEventListener("click", function () {
  selectTip = 0.15;
  console.log(selectTip);
  button15.classList.toggle("active");
});

button25.addEventListener("click", function () {
  selectTip = 0.25;
  console.log(selectTip);
  button25.classList.toggle("active");
});

button50.addEventListener("click", function () {
  selectTip = 0.5;
  console.log(selectTip);
  button50.classList.toggle("active");
});

let buttonCustom;
let numberOfPeople;
function calcTip() {
  numberOfPeople = document.querySelector("#number-of-people").value;
  if (!numberOfPeople) {
    zeroEvaluation.classList.remove("hidden");
    document.getElementById("number-of-people").focus();
  } else {
    zeroEvaluation.classList.add("hidden");
    buttonCustom = document.querySelector("#custom-button").value / 100;
    bill = Number(document.getElementById("bill").value);
    tip =
      Math.round(
        ((bill * selectTip) / numberOfPeople ||
          (bill * buttonCustom) / numberOfPeople) * 100
      ) / 100;
    console.log(tip);
    tipAmount.textContent = "$" + tip;
    console.log(numberOfPeople);
  }
}

let totalvalue;

function calcTotal() {
  calcTip();
  if (numberOfPeople) {
    totalvalue = Math.round((bill / numberOfPeople + tip) * 100) / 100;
    console.log(total);
    total.textContent = "$" + totalvalue;
  }
}

calculateButton.addEventListener("click", calcTotal);
//calculateButton.addEventListener("click", calcTip);

//

resetButton.addEventListener("click", function () {
  location.reload();
});

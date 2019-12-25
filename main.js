const displayDiv = document.querySelector(".display");
const secondaryDisplayDiv = document.querySelector(".secondary-display");
const btnNum = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const btnOperate = document.querySelector(".operate");
const btnClear = document.getElementById("clear");
const btnDot = document.getElementById(".");
const btnBack = document.getElementById("back");

let operator;
let a;
let b;
let result;
console.log(btnNum);
console.log(btnOperate);
console.log(btnClear);
console.log(btnDot);

btnNum.forEach(button => button.addEventListener("click", displayNum));
btnOperator.forEach(button => button.addEventListener("click", getOperator));
btnOperate.addEventListener("click", equals);
btnClear.addEventListener("click", clear);
btnDot.addEventListener("click", addDot);
btnBack.addEventListener("click", removeCharacter);

function removeCharacter() {
  if (displayDiv.innerText !== "") {
    let str = displayDiv.innerText;
    displayDiv.innerText = str.slice(0, -1);
    console.log("removed char");
    a = displayDiv.innerText;
  }
}

function addDot() {
  let str = displayDiv.innerText;
  console.log(str);
  if (!str.includes(".")) {
    displayDiv.innerText += ".";
  }
}

function clear() {
  a = "";
  b = "";
  result = "";
  operator = undefined;
  displayDiv.innerText = "";
  secondaryDisplayDiv.innerText = "";
}

function displayNum(e) {
  if (operator == undefined) {
    displayDiv.innerText += e.target.id;
    a = displayDiv.innerText;
    //console.log(displayValueA);
  } else {
    displayDiv.innerText += e.target.id;
    b = displayDiv.innerText;
  }
  // console.log(e.target.className);
}

function getOperator(e) {
  if (e.target.className == "btn operator") {
    operator = e.target.id;
    secondaryDisplayDiv.innerText = displayDiv.innerText + " " + `${operator}`;
    displayDiv.innerText = "";
  }
}
function equals() {
  if (operator == undefined) {
    console.log("operator not defined");
  } else {
    secondaryDisplayDiv.innerText += " " + displayDiv.innerText;

    a = Number(a);
    b = Number(b);

    operate(operator, a, b);
    result = Math.round(result * 100) / 100;
    displayDiv.innerText = result;
    operator = undefined;
    a = result;
    b = "";
  }
}

function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(operator);
  result = a + b;

  console.log(result);
}

function substract(a, b) {
  result = a - b;
}

function multiply(a, b) {
  result = a * b;
}

function divide(a, b) {
  if (b == 0) {
    result = "Cannot divide by zero!";
  } else {
    result = a / b;
  }
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return substract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

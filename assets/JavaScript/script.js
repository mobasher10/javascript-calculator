const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const equalEl = document.querySelector(".equal");
const resetEl = document.querySelector(".res");
const delEl = document.querySelector(".del");

let num1 = "";
let num2 = "";
let lastOperation = "";
let result = null;
let haveDot = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) return;
    num2 += e.target.innerText;
    display2.innerText = num2;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    haveDot = false;
    const operatorName = e.target.innerText;
    lastOperation = operatorName;
    if (num1 && num2 && lastOperation) {
      mathOperator();
    } else {
      result = parseFloat(num2);
    }

    clearVar(operatorName);
  });
});
const mathOperator = function () {
  if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(num2);
  }
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(num2);
  }
  if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(num2);
  }
  if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(num2);
  }
  if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(num2);
  }
};

const clearVar = function (name = "") {
  num1 += num2 + " " + name + " ";
  display1.innerText = num1;
  num2 = "";
  display2.innerText = "0";
};

equalEl.addEventListener("click", () => {
  if (num1 || num2) {
    mathOperator();
    clearVar();
    haveDot = false;
    display2.innerText = result;
    num1 = "";
    num2 = result;
  } else {
    return;
  }
});

delEl.addEventListener("click", () => {
  num2 = "";
  display2.innerText = "0";
});
resetEl.addEventListener("click", () => {
  num2 = "";
  display2.innerText = "0";
  num1 = "";
  display1.innerText = "0";
});

const chechmark = document.querySelectorAll(".chechmark");
chechmark.forEach((check) => {
  check.addEventListener("click", () => {
    check.classList.toggle(".active");
  });
});

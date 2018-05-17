function plus(int1, int2) {
  return int1 + int2;
}

function minus(int1, int2) {
  return int1 - int2;
}

function times(int1, int2) {
  return int1 * int2;
}

function dividedBy(int1, int2) {
  return int1 / int2;
}

const operations = {
  "+": plus,
  "-": minus,
  x: times,
  "/": dividedBy
};

function calculate(int1, operation, int2) {
  return operation(int1, int2);
}

const display = document.querySelector(".display");

const buttons = document.querySelector(".buttons");

const calculatorState = {
  int1: "",
  int2: "",
  operation: ""
};

function updateDisplay(displayString) {
  display.textContent = displayString;
}

buttons.addEventListener("click", e => {
  let target = e.target.id.split("_");
  if (target[0] === "num") {
    if (calculatorState.operation == "") {
      calculatorState.int1 += target[1];
    } else {
      calculatorState.int2 += target[1];
    }
  } else if (target[0] == "funct") {
    if (
      calculatorState.int1 != "" &&
      calculatorState.int2 != "" &&
      target[1] == "equals"
    ) {
      updateDisplay(
        calculate(
          parseInt(calculatorState.int1),
          operations[calculatorState.operation],
          parseInt(calculatorState.int2)
        )
      );
      return;
    } else if (
      calculatorState.int1 != "" &&
      calculatorState.int2 == "" &&
      target[1] != "equals"
    ) {
      calculatorState.operation = e.target.textContent;
    }
  }
  updateDisplay(
    calculatorState.int1 + calculatorState.operation + calculatorState.int2
  );
});

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

function calculate(int1, operation, int2) {
  return operation(int1, int2);
}

// DONT LOOK BEHIND THE CURTAIN
// THE CODE UNDER THESE LINES DOESNT NEED TO MAKE SENSE TODAY
// THE IMPORT PART IS UNDERSTANDING THE WAY WE CAN USE FUNCTIONS

// THIS OBJECT ASSIGNS THE FUNCTIONS ABOVE TO THEIR REPRESENTATION ON THE DOM
const operations = {
  "+": plus,
  "-": minus,
  x: times,
  "/": dividedBy
};

// QUERY THE DOM FOR THE TWO BLOCKS WE NEED TO INTERACT WITH
// THE DISPLAY IS WHERE WE WILL SHOW THE CALCULATOR STATE
// AND THE BUTTONS DIV CONTAINS ALL OF THE BUTTONS THAT WE CAN PRESS
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// SERIOUSLY - DONT WORRY ABOUT THE REGEX...
const justFirstNumber = /^\d+[.]?\d*$/;
const fullExpression = /(^\d+[.]?\d*)([+-/x]{1})(\d+[.]?\d*$)/;

// WE ARE USING THIS VARIABLE TO SAVE THE STATE OF THE CALCULATOR
// WE WILL UPDATE IT ANY TIME CLICK ON A VALID BUTTON
let calculatorState = "";

// REUSABLE FUNCTION TO DISPLAY WHATEVER WE WANT TO THE CALCULATORS DISPLAY
function updateDisplay(displayString) {
  display.textContent = displayString;
}

// ONE EVENT LISTENER THAT IS FOR CLICKS ON ANY OF THE BUTTONS
buttons.addEventListener("click", e => {
  // PULL THE ID OFF OF THE CLICKED BUTTON AND SPLIT ON THE _ CHARACHTER
  // THIS WILL CREATE AN ARRAY THAT LOOKS LIKE THIS ["num", "1"]
  let target = e.target.id.split("_");

  // THE SWITCH STATEMENT WILL DETERMINE THE ACTION TO TAKE BASED ON THE
  // CONDITIONAL LOGIG - SO WHICH EVER CASE EVALUATES TO TRUE FIRST WILL BE RUN
  switch (true) {
    // DID THE BUTTON ID START WITH 'NUM'?
    case target[0] === "num":
      // ADD THE NUMBER ASSOCIATED WITH THE BUTTON TO THE CALCSTATE
      calculatorState += target[1];
      break;

    // DID THE BUTTON ID START WITH 'FUNCT'
    // AND IS THERE JUST NUMBERS IN THE CALCULATOR STATE?
    case target[0] === "funct" && justFirstNumber.test(calculatorState):
      // ADD THE SYMBOL ASSOCIATED WITH THE BUTTON TO THE CALCSTATE
      calculatorState += e.target.textContent;
      break;

    // DID THEY CLICK ON THE EQUALS BUTTON
    // AND DOES THE CALCULATOR STATE SHOW THAT THERE IS A NUMBER
    // FOLLOWED BY AN OPERATION FOLLOWED BY ANOTHER NUMBER
    case target[0] === "equals" && fullExpression.test(calculatorState):
      // REGEX MUMBO JUMBO SO THAT WE CAN REFERENCE THE FIRST NUMBER,
      // THE OPPERATION AND THE SECOND NUMBER FROM THE CALCSTATE
      matched = calculatorState.match(fullExpression);
      calculatorState = "";
      // USING THE RETURN KEYWORD SO THE FUNCTION STOPS EXCECUTION
      return updateDisplay(
        // WE HAVE TO TURN THE STRING REPRESENTATION OF THE NUMBERS TO FLOATS
        // SO THAT WE CAN USE THEM IN OUR CALCULATION
        // AND WE USE THE OPERATION SYMBOL AS THE KEY ON THE OPERATIONS OBJECT
        // TO REFERENCE THE FUNCTION WE WANT TO PASS IN - THIS IS BECAUSE USING
        // A STRING AS A VARIABLE NAME GETS A BIT HARRY!
        calculate(
          parseFloat(matched[1]),
          operations[matched[2]],
          parseFloat(matched[3])
        )
      );

    // IF NONE OF THE CASES EVALUATE TO TRUE, DO NOTHING
    default:
      break;
  }
  // AFTER WE HAVE UPDEATED THE CALCSTATE - UPDATE THE DISPLAY TO MATCH
  updateDisplay(calculatorState);
});

class Calculator {
  constructor(previosOperandTextElement, currentOperandTextElement) {
    this.previosOperandTextElement = previosOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  // this.clear() is calling the function to clear all the inputs and set to the default values
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  // clear removes all inputs
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    // prohibits the ('.') from repeating
    this.currentOperand = this.currentOperand.toString() + number.toString();
    // so as to append numbers ..not to add numbers on display
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
        default:
            return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const interDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        // const floatNumber = parseFloat(number)
        // if(isNaN(floatNumber)) return ''
        // return floatNumber.toLocaleString('en')
        let interDisplay
        if (isNaN(interDigits)){
            interDisplay = ''
        } else {
            interDisplay = interDigits.toLocaleString("en", {maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${interDisplay}.${decimalDigits}`
        } else {
            return interDisplay
        }
    }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
    if(this.operation != null){
        this.previosOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
    else {
        this.previosOperandTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
// selecting the data attribute use square brackets
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previosOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[ data-current-operand ]"
);

const calculator = new Calculator(
  previosOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });

 deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
  });

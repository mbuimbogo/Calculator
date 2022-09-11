class Calculator {
    constructor(previosOperandTextElement, currentOperandTextElement){
        this.previosOperandTextElement = previosOperandTextElement 
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    // this.clear() is calling the function to clear all the inputs and set to the default values
    clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
    }
    // clear removes all values
    delete(){

    }
    appendNumber(number){
    this.currentOperand = number
    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
// selecting the data attribute use square brackets
const operationButtons = document.querySelectorAll("[data-operation]")
const equalsButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector("[data-delete]")
const allClearBuuton = document.querySelector("[data-all-clear]")
const previosOperandTextElement = document.querySelector("[data-previous-operand]")
const currentOperandTextElement = document.querySelector("[ data-current-operand ]")


const calculator = new Calculator(previosOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
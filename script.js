class Calculator {
    constructor(previosOperandTextElement, currentOperandTextElement){
        this.previosOperandTextElement = previosOperandTextElement 
        this.currentOperandTextElement = currentOperandTextElement
    }
    clear(){

    }
    delete(){

    }
    appendNumber(number){

    }
    chooseOperation(operation){

    }
    compute(){

    }
    updateDisplay(){
        
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
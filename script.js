const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbs = document.querySelectorAll(".num");
const decimalBtn = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");
const backBtn = document.querySelector(".backspace");
const percentBtn = document.querySelector(".percent");
const signBtn = document.querySelector(".plus-minus");
const equalBtn = document.querySelector(".equal");

let operand1 = null;
let operator = "";
let operand2 = null;
let clearForOperand2 = false;

function toDisplay(numBtnInput){
      // Check if we can clear display for operand2
      if(clearForOperand2) {
        display.textContent = ""; // Clear the display for new input
        clearForOperand2 = false;         // Reset the flag
    }

    /* Checks inital display content to see if it's on standby
       If a decimal is clicked on during standby it keeps the 0 else it overwrites it */
    if(display.textContent === "0" && numBtnInput !== "."){
        display.textContent = "";
    }
    display.textContent += numBtnInput;
}

function clear(){
    display.textContent = `0`;
    operand1 = null;
    operator = "";
    operand2 = null;
    clearForOperand2 = false;
}

function backspace(){
    pass;
}

function toPercent(display){
    let numb = parseFloat(display.textContent);
    display.textContent = `${numb/100}`;
}

function changeSign(display){
    if(display.textContent === '0' || display.textContent === '0.'){
        return;
    }
    else if(display.textContent.includes("-")){
        display.textContent = display.textContent.replace("-","");
        return;
    }
    display.textContent = `-${display.textContent}`;
}

function handleDecimalInput(){
    if (!display.textContent.includes(decimalBtn.textContent)) {
        toDisplay(decimalBtn.textContent);
    }
}

function changeToIntOrFloat(operand){
    //Inprogress
    if(operand.includes(".")){
        operand = parseFloat(operand);
    }
}

function operate(ope1, operator, ope2){
    //Assign result to ope1 and clear ope2
    console.log(ope1,operator,ope2);
}

clearBtn.addEventListener('click', clear);

backBtn.addEventListener('click', backspace);

signBtn.addEventListener('click', () => {
    changeSign(display);
});

percentBtn.addEventListener('click', () => {
    toPercent(display);
});

decimalBtn.addEventListener('click', handleDecimalInput);

//Displays numbers on the screen
numbs.forEach(numb => {
    numb.addEventListener("click",() => {
        toDisplay(numb.textContent);
    })
});

operators.forEach(ope => {
    ope.addEventListener('click', () => {
        if(operand1 === null){
            operand1 = parseFloat(display.textContent);
            operator = ope.textContent;
            clearForOperand2 = true;
        }
        else if(operator){
            operand2 = parseFloat(display.textContent);
            operate(operand1, operator, operand2);
            operator = ope.textContent;
        }
    });
});

equalBtn.addEventListener('click', () => {
    if(operand1){
        operand2 = parseFloat(display.textContent);
        operate(operand1, operator, operand2);
    }
});

//Keyboard Inputs
document.addEventListener('keydown', (event) => {
    if(event.key === "."){
        handleDecimalInput();
    }
    //Checks if the key is a number excluding the spacebar
    else if(!isNaN(event.key) && event.key !== " "){
        toDisplay(event.key);
    }
});

clear();
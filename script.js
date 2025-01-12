const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbs = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");

let operand1 = null;
let operator = "";
let operand2 = null;

function toDisplay(input){

    if(display.textContent === "0" && input.textContent !== "."){
        display.textContent = "";
    }
    display.textContent += input.textContent;
}

function clear(){
    display.textContent = `0`;
    operand1 = null;
    operator = "";
    operand2 = null;
}

function changeToIntOrFloat(operand){
    if(operand.includes(".")){
        operand = parseFloat(operand);
    }
}

function operate(){

}

clearBtn.addEventListener('click', clear);
decimal.addEventListener('click', () => {
    if(!display.textContent.includes(decimal.textContent)){
        toDisplay(decimal);
    }
});


//Displays numbers on the screen
numbs.forEach(numb => {
    numb.addEventListener("click",() => {
        toDisplay(numb);
    })
});

operators.forEach(ope => {
    ope.addEventListener('click', () => {
        operand1 = display.textContent;
        operator = ope.textContent;
    });
});

clear();
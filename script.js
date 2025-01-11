const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbs = document.querySelectorAll(".num");
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");

let operand1 = 0;
let operator = "";
let operand2 = 0;

function toDisplay(input){
    if(display.textContent === "0"){
        display.textContent = "";
    }
    display.textContent += input.textContent;
}

function clear(){
    display.textContent = `${operand1}`;
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
    });
});
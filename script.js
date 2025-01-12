const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");
const numbs = document.querySelectorAll(".num");
const decimalBtn = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");
const percentBtn = document.querySelector(".percent");
const signBtn = document.querySelector(".plus-minus");

let operand1 = null;
let operator = "";
let operand2 = null;

function toDisplay(numBtnInput){
    /* Checks inital display content to see if it's on standby
       If a decimal is clicked on during standby it keeps the 0 else it overwrites it */
    if(display.textContent === "0" && numBtnInput.textContent !== "."){
        display.textContent = "";
    }
    display.textContent += numBtnInput.textContent;
}

function clear(){
    display.textContent = `0`;
    operand1 = null;
    operator = "";
    operand2 = null;
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

function changeToIntOrFloat(operand){
    //Inprogress
    if(operand.includes(".")){
        operand = parseFloat(operand);
    }
}

function operate(){
    pass;
}

clearBtn.addEventListener('click', clear);
signBtn.addEventListener('click', () => {
    changeSign(display);
});

percentBtn.addEventListener('click', () => {
    toPercent(display);
});

decimalBtn.addEventListener('click', () => {
    if(!display.textContent.includes(decimalBtn.textContent)){
        toDisplay(decimalBtn);
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
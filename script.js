let numButtons = document.querySelectorAll('.numButton');
let clearButton = document.querySelector('.clearButton');
let operatorButtons = document.querySelectorAll('.operator');
let operatorArray=Array.from(operatorButtons);
let calcDisplay = document.querySelector('.displayContainer');
let array = [];
let equals = document.querySelector('.equalButton');

clearButton.addEventListener('click', () => location.reload());

numButtons.forEach(button => button.addEventListener('click', ( ) => {
    let numberChoice = button.textContent;
    array.push(numberChoice);
    calcDisplay.textContent = (array.join(''));
}))

operatorArray.forEach(operator => {
    operator.addEventListener('click', function handleClick(event) {
        operator.classList.add('clicked');
    })
})

function makeParameterA() {
    let numDisplay = (array.join(''));
    let displayNums = numDisplay.split(/[+/\-*]/);
    let strA=displayNums[0];
    let a = parseFloat(strA);
    return a;
}

function makeParameterB() {
    let numDisplay = (array.join(''));
    let displayNums = numDisplay.split(/[+/\-*]/);
    let strB=displayNums[1];
    let b = parseFloat(strB);
    return b;
}

function addition() {
    let a = makeParameterA();
    let b = makeParameterB();
    let sum = a + b;
    calcDisplay.textContent = sum;
    return sum;
}

function subtraction() {
    let a = makeParameterA();
    let b = makeParameterB();
    let difference = a - b;
    calcDisplay.textContent = difference;
    return difference;
}

function multiply() {
    let a = makeParameterA();
    let b = makeParameterB();
    let product = a * b;
    calcDisplay.textContent = product;
    return product;
}

function divide() {
    let a = makeParameterA();
    let b = makeParameterB();
    let quotient = a / b;
    calcDisplay.textContent = quotient;
    return quotient;
}

function whichOperator() {
    if (document.getElementById('add').classList.contains('clicked')) {
        addition();
    } else if (document.getElementById('subtract').classList.contains('clicked')) {
        subtraction();
    } else if (document.getElementById('multiply').classList.contains('clicked')) {
        multiply();
    } else if (document.getElementById('divide').classList.contains('clicked')) {
        divide();
    };
}

function makeMath() {
    equals.addEventListener('click', () => {
        whichOperator();
    })  
}

console.log(makeMath());
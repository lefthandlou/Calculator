

//pop? unshift?
//array objects, and constructor function? add event handler?
//constructor function?

// Event listener to display and store first number 
// Event listener to display and store operator clicked; call operator function
// Event listener for equals


let numButtons = document.querySelectorAll('.numButton');
let clearButton = document.querySelector('.clearButton');
let operatorButtons = document.querySelectorAll('.operator');
let operatorArray=Array.from(operatorButtons);
let calcDisplay = document.querySelector('.displayContainer');
let array = [];
let resultsArray = [];
let equals = document.querySelector('.equalButton');
let add = document.getElementById('add')
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

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
    if (resultsArray.length === 0) {
        let numDisplay = (array.join(''));
        let displayNums = numDisplay.split(/[+/\-*]/);
        let strA=displayNums[0];
        let a = parseFloat(strA);
        return a;
    } else {
        let strA = resultsArray[0];
        let a = parseFloat(strA);
        return a;
    }
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
    resultsArray.unshift(sum);
    return sum;
}

function subtraction() {
    let a = makeParameterA();
    let b = makeParameterB();
    let difference = a - b;
    calcDisplay.textContent = difference;
    resultsArray.unshift(difference);
    return difference;
}

function multiplication() {
    let a = makeParameterA();
    let b = makeParameterB();
    let product = a * b;
    calcDisplay.textContent = product;
    resultsArray.unshift(product);
    return product;
}

function division() {
    let a = makeParameterA();
    let b = makeParameterB();
    let quotient = a / b;
    calcDisplay.textContent = quotient;
    resultsArray.unshift(quotient);
    return quotient;
}

function whichOperator() {
    if (add.classList.contains('clicked')) {
        addition();
        add.classList.remove('clicked');
        array = [];
    } else if (subtract.classList.contains('clicked')) {
        subtraction();
        subtract.classList.remove('clicked');
        array = [];
    } else if (multiply.classList.contains('clicked')) {
        multiplication();
        multiply.classList.remove('clicked');
        array = [];
    } else if (divide.classList.contains('clicked')) {
        division();
        divide.classList.remove('clicked');
        array = [];
    };
}

function makeMath() {
    equals.addEventListener('click', () => {
        whichOperator();
    })  
}
    

console.log(makeMath());


    
    
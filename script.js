let allButtons = document.querySelectorAll('.button');
let numButtons = document.querySelectorAll('.numButton');
let operatorButtons = document.querySelectorAll('.operator');
let clearButton = document.querySelector('.clearButton');
let equalButton = document.querySelector('.equalButton');
let periodButton = document.querySelector('.period');
let calcDisplay = document.querySelector('.displayContainer');




//set event listener to all buttons
//log text content of button into display
//make everything begfore operator "a" and everything after operator "b"
//combine nums and operators
//return result


function numListener() {
    allButtons.forEach(button => {
        button.addEventListener('click', function handleClick(event){
            calcDisplay.textContent = button.textContent;
            button.classList.add('clicked');
            button.setAttribute('id', 'clicked');
            let buttonText = document.getElementById('click');
            let array = [];
            array.push(buttonText.textContent);
            console.log(array);
        });
    });
}

function equationArray() {
    let equationElems = document.getElementsByClassName('.clicked');
    let array = [];
    array.push(equationElems.textContent);
    console.log(array);
}

function clearCalc() {
    clearButton.addEventListener('click', () => location.reload());
}

console.log(numListener());
console.log(clearCalc());

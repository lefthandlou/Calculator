/*
event listener - decide if using one or multiple
    would it be num listener, operator listener, num listener?

when clicked, buttons need their value show upon the display;
if multi-digit numbers are input, that all needs to show up.
Button clicks need to be stored for use in equation;
Operator clicks need to pull correct math equation function
So equals button listener needs to be the final listener that summons all?
Clear button listener to refresh page and start over

*/

// addEVentListener for each num button; let buttonContent = button.textContent;
// push to array 

//let a = eventListener 1
//let b = eventListener 3
// let function = eL1 (eL2) el3;
// return product

//TODO set up numpad event listener to concat all numbers (including zeros and
// periods) clicked before operator; display and store; save as a
//TODO set up operator listener; display operator chosen, store or give class
//TODO numpad event again; store as b
//TODO wire up equals EL to take stored a, b, and operator and summon correct
//math function, return result
// also, how do I get the value from the button clicked??

// WHAT I'VE TRIED - NUMPAD EVENT LISTENER
//      for loop to push choice to array, allowing multiple numbers to concat XX

let numButtons = document.querySelectorAll('.numButton');
let clearButton = document.querySelector('.clearButton');
let calcDisplay = document.querySelector('.displayContainer');
let array = [];

clearButton.addEventListener('click', () => location.reload());

function chooseNumbers() { numButtons.forEach(button => button.addEventListener('click', function handleClick(e){
        let numberChoice = button.textContent;
        array.push(numberChoice);
        console.log(array);
        let numDisplay = (array.join(''));
        calcDisplay.textContent = numDisplay;
        console.log(numDisplay);
    }))
};


chooseNumbers();
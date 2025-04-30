let number1 = 0;
let operator = '';
let number2 = 0;

function add(number1, number2) {
    return number1 + number2;
}
function substract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if(number2 === 0) {
        return 'wtf u doin';
    }
    return number1 / number2;
}

function operate(operator, number1, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);
        case '-':
            return substract(number1, number2);
        case '*':
            return multiply(number1, number2);
        case '/':
            return divide(number1, number2);
    }
}

let display = document.querySelector('#display');

let numberButtons = document.querySelectorAll('.number-buttons button');
let operatorButtons = document.querySelectorAll('.operator-buttons button');
let utilityButtons = document.querySelectorAll('.utility-buttons button');

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        operator = e.target.textContent;
        number1 = parseInt(display.textContent);
        display.textContent = '';
    })
})

utilityButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === '=') {
            number2 = parseInt(display.textContent);
            let operation = operate(operator, number1, number2);
            display.textContent = operation;
        } else {
            display.textContent = '';
        }
    })
})
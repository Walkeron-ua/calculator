function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(firstN, secondN, operator) {
    if (operator === "+") return add(firstN, secondN);
    if (operator === "-") return subtract(firstN, secondN);
    if (operator === "*") return multiply(firstN, secondN);
    if (operator === "/") {
        if (secondN === 0) return alert("Can't divide by 0");
        return divide(firstN, secondN);
    } 
}

let check;
do {
    let firstNumber = +prompt("Enter first number");
    let secondNumber = +prompt("Enter second number");
    let operator = prompt("Enter operator you want to do ('+', '-', '*', or '/')");
    alert(operate(firstNumber, secondNumber, operator));
    check = prompt("Press 'OK' to continue otherwise 'Close'")
} while (check !== null);
// declare arithmetic variables
let operand1, operand2, operator;

// generates random integer between min and max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// generates random operator (+, -, *, or /)
function randOperator() {
    switch (randInt(0,3)) {
        case 0: return "+";
        case 1: return "-";
        case 2: return "*";
        case 3: return "/";
    }
}

// computes the answer to the current question
function getAnswer() {
    switch (operator) {
        case "+": return operand1 + operand2;
        case "-": return operand1 - operand2;
        case "*": return operand1 * operand2;
        case "/": return operand1 / operand2;
    }
}

// generates a new question, updates the page
function generateQuestion() {
    // generate question values
    operand1 = randInt(0, 10);
    operand2 = randInt(1, 10);
    operator = randOperator();
    // declare element variables
    let question = document.getElementById("question");
    let check = document.getElementById("check_text");
    let input = document.getElementById("answer_input");
    // set question text
    question.innerHTML = operand1 + " " + operator + " " + operand2 + " = ?";
    check.innerHTML = "Go ahead.";
    check.style.color = "orange";
    input.value = "";
}

// checks if the user input is the right answer, updates the page
function checkAnswer() {
    // declare element variables
    let check = document.getElementById("check_text");
    let answer = document.getElementById("answer_input").value;
    // display if the input answer was correct
    check.innerHTML = (answer == getAnswer()) ? "CORRECT :)" : "INCORRECT >:(";
    check.style.color = (answer == getAnswer()) ? "green" : "red";
}
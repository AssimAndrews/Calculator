function add() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function clearResults() {
    document.getElementById("result").innerHTML = "";
}

function subtract() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}

function division() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = "Result: " + result;
}
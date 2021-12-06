

var num1 = 60;
var num2 = 10;
var reminder = num1 / num2;
console.log('reminder', reminder);


// 2 * 1 = 2

// var table = 2;
// var result = 0
// for(let count = 0; count < 10; count++){
//      result = table * count;


//     console.log("Table No 2", '*',count, "=", result);
// }


// function sound() {
//     var audio = new Audio('../mp3/click.mp3');
//     audio.play();
// }

// function sendBtnValue(btnValue) {
//     document.getElementById("currentOperand").innerHTML += btnValue;
//     sound();
// }

// function allClear() {
//     document.getElementById("currentOperand").innerHTML = null;
//     document.getElementById("previousOperand").innerHTML = null;
//     sound();
// }

// function plus() {
//     var plusSign = "+";
//     document.getElementById("currentOperand").innerHTML += plusSign;
//     sound();
// }

// function minus() {
//     var minusSign = "-";
//     document.getElementById("currentOperand").innerHTML += minusSign;
//     sound();
// }

// function multiply() {
//     var multiplySign = "*";
//     document.getElementById("currentOperand").innerHTML += multiplySign;
//     sound();
// }

// function devide() {
//     var devideSign = "/";
//     document.getElementById("currentOperand").innerHTML += devideSign;
//     sound();
// }

// function point() {
//     var pointSign = ".";
//     document.getElementById("currentOperand").innerHTML += pointSign;
//     sound();
// }

// function equal() {
//     sound();
//     var screenData = document.getElementById("currentOperand").innerHTML;
//     var result = document.getElementById("currentOperand").innerHTML = eval(screenData);
//     var equalSign = " = "
//     document.getElementById("currentOperand").innerHTML = result;
//     document.getElementById("previousOperand").innerHTML = screenData += ' = '
    
// }

// function deleteData() {
//     var screenValue = document.getElementById("currentOperand").innerHTML;
//     var deleteOne = screenValue.slice(0, -1);
//     document.getElementById("currentOperand").innerHTML = deleteOne ;
//     sound();
// }
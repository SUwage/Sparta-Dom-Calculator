// Make a calculation between two numbers and see the result for all four operations.

document.addEventListener("DOMContentLoaded", function() {
console.log("The DOM is loaded");

// Be able to press a button and see that number on the screen.
  // Add a click event listener so that when you click a number button, its innerHTML (the number itself) goes into the screen.
  // Make two variables called number1 and number2.
  // if number1 is null, save the value of this number in number1, ELSE IF number1 is not null, save the value of this number in number2.
  var number1 = null;
  var number2 = null;
  var operator = null;

  var display = document.getElementById('screen');

  var numberButtons = document.getElementsByClassName('buttonNum');
  for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", displayNumber);
  }

  function displayNumber(){
    display.innerHTML = this.innerHTML;
    if(number1 == null) {
    number1 = this.innerHTML;
    // console.log(number1);
  } else {
    number2 = this.innerHTML;
    }
  }

// Be able to press a operator button and see that operation on the screen.
  // Add a click event listerner so that when you click an operator button, its innerHTML (the symbol of the operation) goes into the screen. //If the screen's innterHTML is NOT Sparta Calculator (if there's already a number or operator on the screen)
  // Save the value of this operation in a variable.

  var operatorButtons = document.getElementsByClassName("operator");
  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", displayOperator);
  }

// Be able to press another number button and see that number on the screen.
  function displayOperator(){
    if(display.innerHTML != "Sparta Calculator") {
      display.innerHTML = this.innerHTML;
      operator = this.innerHTML;
    }
  }


// Be able to press the equal button and see the result of the operation on the screen.
  // Add a click event listener so the equals button.
  // Call the eval function with number1, number2 and operator passed in and put the result into the screen.
  // Reset the value of number1, number2 and operator to null.

  var equalsButton = document.getElementsByClassName('equals')[0];
  equalsButton.addEventListener("click", displayResult);

  function displayResult() {
    display.innerHTML = eval (number1 + operator + number2);
  }

// Be able to press the AC button and clear the screen, so I can preform another operation on two numbers.
  // Add a click EventListener so that the screen goes back to Sparta Calculator

  var clearButton = document.getElementsByClassName('buttonClear')[0];
  clearButton.addEventListener("click", clearScreen);

  function clearScreen() {
    display.innerHTML = "Sparta Calculator";
    number1 = null;
    number2 = null;
    operator = null;
  }



});













// document.addEventListener("DOMContentLoaded", function() {
// console.log("The DOM is loaded");
//
// var myButtons = document.getElementsByClassName("buttonNum");
// var textBox = document.getElementById("screen");
// var numA = 0;
// var numB = 0;
//
// myButtons[0].addEventListener('click', function(event){
//   textBox.innerHTML = "7";
//   if (numA == " ") {
//     numA = 7;
//   }
//   else {
//     numB = 7;
//   }
// });
//
// myButtons[1].addEventListener('click', function(event){
//   textBox.innerHTML = "8";
//   if (numA == " ") {
//     numA = 8;
//   }
//   else {
//     numB = 8;
//   }
// });
//
// myButtons[2].addEventListener('click', function(event){
//   textBox.innerHTML = "9";
//   if (numA == " ") {
//     numA = 9;
//   }
//   else {
//     numB = 9;
//   }
// });
//
// myButtons[3].addEventListener('click', function(event){
//   textBox.innerHTML = "4";
//   if (numA == " ") {
//     numA = 4;
//   }
//   else {
//     numB = 4;
//   }
// });
//
// myButtons[4].addEventListener('click', function(event){
//   textBox.innerHTML = "5";
//   if (numA == " ") {
//     numA = 5;
//   }
//   else {
//     numB = 5;
//   }
// });
//
// myButtons[5].addEventListener('click', function(event){
//   textBox.innerHTML = "6";
//   if (numA == " ") {
//     numA = 6;
//   }
//   else {
//     numB = 6;
//   }
// });
//
// myButtons[6].addEventListener('click', function(event){
//   textBox.innerHTML = "1";
//   if (numA == " ") {
//     numA = 1;
//   }
//   else {
//     numB = 1;
//   }
// });
//
// myButtons[7].addEventListener('click', function(event){
//   textBox.innerHTML = "2";
//   if (numA == " ") {
//     numA = 2;
//   }
//   else {
//     numB = 2;
//   }
// });
//
// myButtons[8].addEventListener('click', function(event){
//   textBox.innerHTML = "3";
//   if (numA == " ") {
//     numA = 3;
//   }
//   else {
//     numB = 3;
//   }
// });
//
//
//
//
//
// });

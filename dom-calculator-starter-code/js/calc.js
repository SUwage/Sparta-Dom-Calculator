console.log("hello");

// var myButtons = document.getElementsByClassName("buttonNum");
//
// // for (var i = 0; i < myButtons.length; i++) {
// //   myButtons[i].addEventListener("click", function(){
// //     console.log(this.value + " was clicked");
// //   })
// // }
//
// // for (var i = 0, l = myButtons.length; i < l; i++) {
// //     myButtons[i].onclick = this.value;
// //     console.log(myButtons[i]);
// //   }

document.addEventListener("DOMContentLoaded", function() {
console.log("The DOM is loaded");

var myButtons = document.getElementsByClassName("buttonNum");
var textBox = document.getElementById("screen");
var numA = 0;
var numB = 0;

myButtons[0].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "7";
  if (numA == " ") {
    numA = 7;
  }
  else {
    numB = 7;
  }
});

myButtons[1].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "8";
  if (numA == " ") {
    numA = 8;
  }
  else {
    numB = 8;
  }
});

myButtons[2].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "9";
  if (numA == " ") {
    numA = 9;
  }
  else {
    numB = 9;
  }
});

myButtons[3].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "4";
  if (numA == " ") {
    numA = 4;
  }
  else {
    numB = 4;
  }
});

myButtons[4].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "5";
  if (numA == " ") {
    numA = 5;
  }
  else {
    numB = 5;
  }
});

myButtons[5].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "6";
  if (numA == " ") {
    numA = 6;
  }
  else {
    numB = 6;
  }
});

myButtons[6].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "1";
  if (numA == " ") {
    numA = 1;
  }
  else {
    numB = 1;
  }
});

myButtons[7].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "2";
  if (numA == " ") {
    numA = 2;
  }
  else {
    numB = 2;
  }
});

myButtons[8].addEventListener('click', function(event){
  event.stopPropagation();
  textBox.innerHTML = "3";
  if (numA == " ") {
    numA = 3;
  }
  else {
    numB = 3;
  }
});





});

// var my = document.getElementsByClassName("screen");

// var my = document.getElementsByClassName("buttonNum").addEventListener("click", "screen");






// target screen id, click event handler and .innerHTML = no;

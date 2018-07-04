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


var myButtons = document.getElementsByClassName("buttonNum");

for (var i = 0; i < myButtons.length; i++) {
  myButtons[i].addEventListener("click", function(){
    console.log(this.value + " was clicked");
  })
}


// var my = document.getElementsByClassName("screen");

// var my = document.getElementsByClassName("buttonNum").addEventListener("click", "screen");






// target screen id, click event handler and .innerHTML = no;

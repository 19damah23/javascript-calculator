let button = document.querySelector(".button-container");
let screen = document.querySelector("#screen");
let screenReset = false;
let count = false;
let tmpVal = '';
let operator = '';

button.addEventListener("click", function(e){

  let buttonClick = e.target;
  let buttonValue = buttonClick.innerText;
  
  if (buttonValue == "C") {

    screen.value = "";
    // clear temporary values
    tmpVal = "";

  } else if (buttonValue == "<") {

    screen.value = screen.value.slice(0, -1);

  } else if (buttonValue == "=") {
    
    if (count == true) {
      screen.value = eval(tmpVal + operator + screen.value);
      count = false;
    }

  } else if (buttonValue == ".") {
    // else if below so that when you write point (.)
    // then it doesn't immediately do the calculation
    
    screen.value = screen.value + buttonValue;

  } else if (buttonClick.classList.contains('operator')) {
    
    if (count == true) {
      screen.value = eval(tmpVal + operator + screen.value);
      count = false;
    }

    tmpVal = screen.value;
    operator = buttonValue;
    screenReset = true;

  } else {

    if (screenReset == true) {
      screen.value = buttonValue;
      screenReset = false;
      count = true;
    } else {
      screen.value = screen.value + buttonValue;
    }

  }
});
let currentInput = "0"

const appendNumber = (number) => {
  if (currentInput === "0") {
    currentInput = number
  } else {
    currentInput = currentInput + number
  }
  updateDisplay()
}

const appendOperator = (operator) =>  {
  currentInput += operator
  updateDisplay()
}

const del = () => {
  currentInput = currentInput.slice(0, -1);


  updateDisplay()
}


const updateDisplay = () => {
  document.getElementById("display").innerHTML = currentInput
}

const calculate = () => {
  currentInput = eval(currentInput).toString()
  updateDisplay()
}

const resetDisplay = () => {
  currentInput = '0'
  updateDisplay()
}

updateDisplay()

const radioButtons = document.getElementsByClassName("radio-button");
const arrayOfButtons = [...radioButtons];

arrayOfButtons.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.body.classList.add("theme-dark")
      document.body.classList.remove("theme-grey")
      document.body.classList.remove("theme-darkest")
    } else if (index == 1) {
      document.body.classList.add("theme-grey")
      document.body.classList.remove("theme-dark")
      document.body.classList.remove("theme-darkest")
    } else {
      document.body.classList.add("theme-darkest")
      document.body.classList.remove("theme-grey")
      document.body.classList.remove("theme-dark")
    }
    
    arrayOfButtons
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});

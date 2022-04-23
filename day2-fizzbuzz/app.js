
const Btn = document.querySelector("button") //Gets the button from the corresponding document
const input = document.querySelector("input")
const display = document.querySelector(".display")
var allArray = []

// Function takes in value and checks if it is a multiple of either 3, 5 or both and returns
// Fizz, Buzz and FizzBuzz respectively. And returns the number if neither
const returnFizzBuzz = (val) => {
  if (val % 3 === 0 && val % 5 === 0) { return "FizzBuzz" }
  else if (val % 3 === 0) { return "Fizz" }
  else if (val % 5 === 0) { return "Buzz" }
  else { return val }
}


Btn.addEventListener("click", () => {
  // Checks if the input is empty
  if (!input.value) {
    alert("Alaye, input a value na")
  }
  // Checks if the input is less than zero
  else if (input.value === 0) {
    alert("Alaye, put better number na.")
  }
  else {
    // Runs a function for each number from 1 to the certain number
    for (let i = 1; i <= input.value; i++) {
      allArray.push(returnFizzBuzz(i))

      // Makes sure each element in the array is seperated by a space and comma
      var stringArr = allArray.join(', ');
    }
    // Displays array to user
    display.innerText = stringArr

    // Clears the input for another trial
    input.value = ""
  }
})
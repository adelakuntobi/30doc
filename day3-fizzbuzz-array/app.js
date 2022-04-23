
const Btn = document.querySelector("button")
const input = document.querySelector("input")
const display = document.querySelector(".display")
var arrayOfArrays = [25, 19, 17]
var allArray = []

// Function takes in value and checks if it is a multiple of either 3, 5 or both and returns
// Fizz, Buzz and FizzBuzz respectively. And returns the number if neither
const returnFizzBuzz = (val) => {
  if (val % 3 === 0 && val % 5 === 0) { return "FizzBuzz" }
  else if (val % 3 === 0) { return "Fizz" }
  else if (val % 5 === 0) { return "Buzz" }
  else { return val }
}

// Returns an array of 
const returnArray = (num) => {
  var arr = []
  for (let i = 1; i <= num; i++) {
    arr.push(returnFizzBuzz(i))
  }
  var stringArr = arr.join(', ');
  return stringArr;
}


Btn.addEventListener("click", () => {
  // Takes each element in the array and send it to the returnArray function
  arrayOfArrays.forEach(item => {
    allArray.push(returnArray(item))
  });

  var print = "[[" + allArray.join("],\n\n[") + "]]";
  // console.log(allArray)
  display.innerHTML = print
  // }
})
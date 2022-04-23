
const Btn = document.querySelector("button")
const input = document.querySelector("input")
const display = document.querySelector(".display")
var arrayOfArrays = [{ name: 'Seern', age: 23, level: '500 level' },
{ name: 'BBBgh', age: 'twenty three', level: 'year 1' }]
var allArray = []


const returnEach = (item) => {
  var arr = []
  // Converts each object property to an array and runs a for each function on them
  Object.keys(item).forEach(function (key) {
    var val = item[key];
    console.log(val)
    arr.push(val)
  });
  var string = arr.toString()
  return string.replace(/,/g, '/');
}

Btn.addEventListener("click", () => {
  // Takes each element in the array and send it to returnEach function
  arrayOfArrays.forEach(item => {
    allArray.push(returnEach(item))
    console.log(allArray)
  });

  // Displays to the user
  display.innerHTML = allArray
  // }
})
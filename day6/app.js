
const Btn = document.querySelector("button")
const input = document.querySelector("input")
const display = document.querySelector(".display")
var arrayOfArrays = ['Seern/23/500 level', 'BBBgh/twenty three/year 1']
var allArray = []


const returnEach = (item) => {
  // Converts each object property to an array and runs a for each function on them
  var arr = item.split('/')
  console.log(arr)
  const entries = new Map([
    ['name', arr[0]],
    ['age', arr[1]],
    ['level', arr[2]]
  ]);
  
  const obj = Object.fromEntries(entries);
  return obj
  // for (var a in match)
  // {
  //     var variable = match[a]
  //     console.log(variable)
  // }
  // console.log(item)
}

Btn.addEventListener("click", () => {


  // STEPS
  // 1. Convert the string seperated array to an array
  // 2. Convert the new arrays to object

  // Takes each element in the array and send it to returnEach function
  arrayOfArrays.forEach(item => {
    allArray.push(returnEach(item))
    // console.log(item)
  });
  
  console.log(allArray)
  // Displays to the user
  display.innerText = allArray + "Check the console"
  // }
})
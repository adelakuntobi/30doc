const h1 = document.querySelector("h1")
const testArray = [1, 5, 3, 2, 5, 3, 8, 9, 6]

const sumOfArray = (test) => {
  const val = test.reduce((partialSum, a) => partialSum + a, 0);
  return val;
}

h1.innerText = sumOfArray(testArray);
console.log(sumOfArray(testArray))
const testArray = [1, 5, 3, 2, 5, 3, 8, 9, 6]

const sumOfArray = (test) => {
  const val = test.reduce((partialSum, a) => partialSum + a, 0);
  return val;
}


console.log(sumOfArray(testArray))
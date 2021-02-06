// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example:

// sumOfDifferences([2, 1, 10])
// Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {

  let descendingArray = arr.sort(function (a, b) {
    return b - a;
  });
  const newNumbers = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  arr <= 1 ? 0 : descendingArray.reduce((a, b) => {
    newNumbers.push(a - b)
    return b;
  })

  return arr.length <= 1 ? 0 : newNumbers.reduce(reducer);

}
// Write function avg which calculates average of numbers in given list.

function find_average(array) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sumArray = array.reduce(reducer);
  const averageArray = sumArray / array.length;
  return averageArray;
}
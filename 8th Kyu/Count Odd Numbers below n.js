/*
oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/

function oddCount(n) {
  return Math.floor(n / 2);
}

/*
function oddCount(n){
  let array = [];
  for (let i = 1; i < n; i++) {
    array.push(i)
  }
  return array.filter(number => number % 2 ==! 0).length
}
*/
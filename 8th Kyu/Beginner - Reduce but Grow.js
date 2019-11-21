// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return x.reduce(reducer)
}
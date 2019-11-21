// solution('world'); // returns 'dlrow'

function solution(word) {
  let arrayWorld = word.split('');
  let reverse = arrayWorld.reverse();
  let wordReverse = reverse.join('');
  return wordReverse;
}
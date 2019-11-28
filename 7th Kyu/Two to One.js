/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  let array1 = s1.split('');
  let array2 = s2.split('');
  let arrayJoin = array1.concat(array2);
  let arrayAlphabeticOrder = arrayJoin.sort();
  let ArrayFinal = [...new Set(arrayAlphabeticOrder)];
  let result = ArrayFinal.join('');
  return result;
}
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
*/

function doubleChar(str) {
  let world = '';
  for (let i = 0; i < str.length; i++) {
    world += str[i] + str[i]
  }
  return world
}
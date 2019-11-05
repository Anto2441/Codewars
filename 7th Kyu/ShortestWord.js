/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(quote) {
  let quoteArray = quote.split(' ');
  let result = quoteArray.sort(function (a, b) {
    return a.length - b.length
  })
  return result[0].length;
}


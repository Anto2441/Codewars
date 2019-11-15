/*

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

*/

function DNAStrand(dna) {
  let result = dna.split('');
  for (let i = 0; i < result.length; i++) {
    if (dna[i] === 'A') {
      result[i] = 'T';
    } else if (dna[i] === 'T') {
      result[i] = 'A';
    } else if (dna[i] === 'G') {
      result[i] = 'C';
    } else if (dna[i] === 'C') {
      result[i] = 'G';
    }
  }
  return result.join('');
}
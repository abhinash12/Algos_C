// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  A = cleanstr(stringA);
  B = cleanstr(stringB);

  if(A!==B){
    return false;
  }
  return true;
}

function cleanstr(str){
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

// function anagrams(stringA, stringB) {
//   const A = charMap(stringA);
//   const B = charMap(stringB);
//
//   if(Object.keys(A).length !== Object.keys(B).length){
//     return false;
//   }
//   for (let c in A){
//     if(A[c]!==B[c]){
//       return false;
//     }
//   }
// return true;
// }
//
// function charMap(str){
//   const dict = {};
//   for (let c of str.replace(/[^\w]/g,'').toLowerCase()){
//     dict[c] = dict[c]+1 || 1;
//     }
//     return dict;
// }

module.exports = anagrams;

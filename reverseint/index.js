// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const s = Math.sign(n);
  let rev = n.toString().split('').reverse().join('');
  rev = parseInt(rev)*s;
  return rev;
}

module.exports = reverseInt;

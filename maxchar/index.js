// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const ob = {};
  max = 0;
  maxChar = '';
  for (let char of str){
    ob[char] = ob[char] + 1 || 1;
  }
  for (let char in ob){
    if(ob[char] > max){
      max = ob[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

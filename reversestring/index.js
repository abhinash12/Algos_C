// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     /*const arr = str.split('');
//     reverse =arr.reverse();
//     return arr.join(''); */
//     return str.split('').reverse().join('');
// }

// function reverse(str){
//   let reversed = '';
//   for (let c of str){
//     reversed = c + reversed;
//   }
//   return reversed;
// }

function reverse(str){
  return str.split('').reduce((reversed, char)=>{
    return char + reversed;
  }, '');
}

module.exports = reverse;
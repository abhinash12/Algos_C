// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// function capitalize(str){
//   const words = [];
//   for (let c of str.split(' ')){
//     words.push(c[0].toUpperCase() + c.slice(1));
//   }
//   return words.join(' ');
// }
function capitalize(str) {
  str1 = str[0].toUpperCase();
  for(let i=1; i<str.length;i++){
    if(str1[i-1] === " "){
      str1+= str[i].toUpperCase();
    }
    else{
      str1+=str[i];
    }
  }
  return str1;
}

module.exports = capitalize;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, i=0, stairs = ''){
  if(n===i){
    return;
  }
  if(stairs.length === n){
    console.log(stairs);
    return steps(n, i+1);
  }
  const add = stairs.length<=i ? '#' : ' ';
  steps(n,i,stairs+add);
}


// function steps(n, i = 0, stairs = '') {
//   if(n === i){
//     return;
//   }
//   if(n === stairs.length){
//     console.log(stairs);
//     return steps(n, i+1, stairs = '');
//   }
//   if(stairs.length<=i){
//     stairs+='#';
//   }
//   else{
//     stairs+=' ';
//   }
//   steps(n, i, stairs);
// }

// function steps(n) {
//   for (let i=0; i<n;i++){
//     let stairs = '';
//     for (let j =0;j<n;j++){
//       if(i>=j){
//         stairs+='#';
//       }
//       else{
//         stairs+=' ';
//       }
//     }
//     console.log(stairs);
//   }
// }

module.exports = steps;

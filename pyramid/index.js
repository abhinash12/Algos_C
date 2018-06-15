// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


function pyramid(n, i=0,level=''){
  const midp = Math.floor((2 * n - 1)/2);
  if(i==n){
    return;
  }
  if(level.length===2*n - 1){
    console.log(level);
    return pyramid(n,i+1);
  }
  const add = midp -i <= level.length && midp + i >= level.length ? '#' : ' ';
  // if (midp - i <=level.length && midp + i >=level.length)
  // {
  //   level+='#';
  // }
  // else{
  //   level+=' ';
  // }
  pyramid(n, i, level+add);
}
// function pyramid(n) {
//   const midp = Math.floor((2 * n - 1)/2);
//   for(let i=0;i<n;i++){
//     let level = '';
//     for(let j =0;j<2*n-1;j++){
//       if(midp - i <= j && midp + i >=j){
//         level += '#'
//       }
//       else{
//         level+=' ';
//       }
//     }
//     console.log(level);
//   }
//
// }

module.exports = pyramid;

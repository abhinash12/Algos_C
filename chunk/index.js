// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// function chunk(array, size) {
//   const chunk_arr=[];
//   let i=0;
//   while (i< array.length){
//     chunk_arr.push(array.slice(i,i+size));
//     i = i+size;
//   }
//   return chunk_arr;
// }

// function firstDuplicate(a) {
//     dict = {};
//     for(let i=0; i<a.length;i++){
//       if(!dict[i]){
//         dict[i] = 1;
//       }
//       else {
//         dict++;
//       }
//     }
//     return dict;
// }



function chunk(array, size) {
  const chunk = [];
  for (let c of array){
    const last = chunk[chunk.length - 1];

    if(!last || last.length === size){
      chunk.push([c]);
    }else {
      last.push(c);
    }
  }
  return chunk;
}

module.exports = chunk;

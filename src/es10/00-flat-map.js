// flat
const array = [1,1,2,3,4,[1,3,5,6,[1,2,4]]];
const newArray = array.flat(3);
console.log(newArray.flatMap(v => [v, v*2]));

// flatmap
const array2 = [1,2,3,4,];
console.log(array2.flatMap(v => [v, v*2]));
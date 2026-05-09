const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7]

arr1.push(arr2); // changes the array itself

const arr3 = arr1.concat(arr2) // concat does not change the array -> this returns a new array itself 
console.log(arr3);

const allarr = [...arr1, ...arr2]; // spread method <-> similar to concat

console.log(allarr);

const newarr = [1,2,3,[4,[5,6]], 7,[8,9]];
const newflatarr = newarr.flat(1);

console.log(newflatarr) // flat depth = 1 array eles
console.log(newarr.flat(Infinity)); // flat all depth eles

console.log(Array.from("Rhythm"));
console.log(Array.from({name : "Rhythm"})); // important
let v1 = 1
let v2 = 2
let v3 = 3
console.log(Array.of(v1, v2, v3));
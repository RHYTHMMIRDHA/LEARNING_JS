const myArr = [1, 2, 3, 4, 5, true, "rhythm"];
const myIdols = ["Cristiano Ronaldo", "L. Messi", "Virat Kohli", "AK"];

const days = new Array("Mon", "Tue", "Wed", "thur", "fri", "Sat", "Sun");


// js arrays are mixed, resizable
console.log(myArr[2]);

// arrays on copy operation -> create shallow copy -> same/original reference
// changes get reflected

console.log(days.length());
myIdols.push("Khabib"); // added at the end

console.log(myIdols);
myIdols.pop(); // delete the last ele

myArr.unshift(0); // shift all the array eles to the next place and add newele in front
// costly method

myArr.shift(); // deletion from the front

console.log(myArr.includes("rhythm"));

console.log(myIdols.indexOf(AK)); // if absent -> -1

console.log(myArr);
console.log(myArr.join()) // convert it into string ele separated by ','


//                            slice and splice

// in splice the (strt, end) - > this portion of arr get deleted so original array is changed
// slice do not change the original array
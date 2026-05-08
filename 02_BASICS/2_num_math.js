//////////////////////////Numbers///////////////////////////

// declaring numbers - 2 ways

// way1
let age = 21;
// way2
let salary = new Number(10000000);

console.log(typeof(age)); // Number
console.log(typeof(salary)); // object -> must have some methods

// Methods

console.log(salary.toString().length) // 3

console.log(salary.toFixed(2)) // 2 digits places after decimal
console.log(1024.3494.toFixed(2)) // returns a string

console.log(1024.3494.toPrecision(3)) // precision upto 3 digits
// number before the decimal is greater than 3 digits -> scientific notation
// also returns a string

console.log(salary.toLocaleString()); // as per US strds
console.log(salary.toLocaleString('en-IN')); // as per indian strds

console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
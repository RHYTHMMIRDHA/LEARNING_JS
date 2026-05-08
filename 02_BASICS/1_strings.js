const name = "Rhythm"
const age = 21

console.log(name + age) // concate -> outdated method
// Modern js -> using string interpolation
console.log(`My name is ${name} and i am ${age} years old`);

// Declaring strings using classes
const fname = new String("Rhythm Mirdha");
console.log(typeof fname) // object -> key:value pair here key = index and value is char of string at that index

/////////////////////METHODS///////////////////
// https://chatgpt.com/c/69fd5fad-6048-8322-939a-abf207bd82f0

console.log(fname[1]); // access way
console.log(fname.charAt(2)); // another way to access

console.log(fname.length);
console.log(fname.toUpperCase()); // strings are immutable as they are passed by value

console.log(fname.indexOf('z'))// to find index of char -> if not found return -1

console.log(fname.substring(0, 4)); // (inc, notinc)
console.log(fname.slice()) // (strt, end(notinc)) -> also have neg values like (-2) -> last 2 values

trimmedhello = "  hello  ".trim(); // remove whitespaces and line terminators
console.log(trimmedhello)

replaced = "hello world".replace("hello", "my"); // first ins
// replace all

"apple,banana,mango".split(",") // return an array object

joined = ['1', '2', '3', '4'].join(" ");

// str.includes("substr")
// .startsWith("") | .endsWith("")

// num to string
let n = 123
let str = n.toString()
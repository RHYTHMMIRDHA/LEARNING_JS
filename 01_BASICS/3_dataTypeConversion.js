//      CONVERSION TO Number

let name = "Rhythm";
let age = "21";
let city = null;
let state = undefined;

let nameNum = Number(name);
console.log(nameNum);
console.log(typeof nameNum);

let ageNum = Number(age);
console.log(ageNum);
console.log(typeof ageNum);

let cityNum = Number(city);
console.log(cityNum);
console.log(typeof cityNum);

let stateNum = Number(state);
console.log(stateNum);
console.log(typeof stateNum);

// CONVERSION TO Boolean

let one = 1;
let two = 0;
let three = "hi";
let four = "";

let oneBool = Number(one);
console.log(oneBool);
console.log(typeof oneBool);

let twoBool = Number(two);
console.log(twoBool);
console.log(typeof twoBool);

let threeBool = Number(three);
console.log(threeBool);
console.log(typeof threeBool);

let fourBool = Number(four);
console.log(fourBool);
console.log(typeof fourBool);

// COVERSION TO STRING

let five = null;
let fiveString = String(five);
console.log(fiveString); // null
console.log(typeof fiveString); // string


//         OPERATIONS ON DATATYPES
console.log(true) // true
console.log(+true) // 1
console.log(+false) // 0
console.log(+"") // 0

//          RELATIONAL OPERATORS -> comparisons >, <, >=, <=  and equality works differnetally ---- (a)

console.log("02" > 1) // automatically convert string to number

// (a)
console.log(null > 0); // converted null -> 0    false
console.log(null == 0); // false
console.log(null >= 0); // converted null -> 0   true

console.log(undefined == 0); // all false
console.log(undefined >= 0);
console.log(undefined > 0);

// == (do not checks dataTypes -> if only even values are same -> true , only checks values) and ===(strict check -> check {type + values }-> both must be same for true)

// prefered to use ===
// same for not equal -> != or !==


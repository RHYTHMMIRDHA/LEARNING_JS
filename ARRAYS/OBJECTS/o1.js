// when obj formed from constructor -> formed obj is singleton
// when obj formed from literal -> formed obj is not singleton

////////////////// OBJECT LITERALS ///////////////////////

// in obj literals we have keys in string format
const myObj = {
    "fullname" : "rhythm mirdha",
    name : "rhythm",
    age : 21,
    gender : 'M',
    email : 'rb@yahoo.in'
}

// in arrays key is always : index But in case of object we can have custom keys

// Access Methods

// m1 -> cannot even use m1 to access "fullname"
console.log(myObj.name);

// console.log(myObj[name]); will give error
 
// m2
console.log(myObj["name"]);
console.log(myObj["fullname"]);

// changing value of keys
myObj['email'] = 'rhythm@yahoo.in'

// using a symbol as key in object

const myS = Symbol("key1")
const myObj2 = {
    Branch : "Mathematics and computing",
    myS : "hi" // cannot use symbol as key in this way
}

console.log(myObj2["myS"]) // give correct but
console.log(typeof myObj2["myS"]) // type is string not symbol

// correct way 
const myObj3 = {
    Branch : "Mathematics and computing",
    [myS] : "hi"  // accessed only using .[]
}

// to lock a object : cannot change anything -> if try to change the value of key -> no error but not get updated
Object.freeze(myObj3);

// taking functions inside an obj

myObj.myf = function(){
    console.log(`Regards to Mr. ${this.fullname}`); // this for the obj itself whose key is this function
}

console.log(myObj.myf) // returns the refernce of function
console.log(myObj.myf()) // but undefined bhi aarha h next line mein
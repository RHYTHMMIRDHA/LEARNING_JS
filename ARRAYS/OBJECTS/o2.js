////////////////// Singleton Object ////////////////////////

const User = new Object();

User.name = "Rhythm Mirdha";
User.id = "ab12";
User.age = 21;

console.log(User); // same o/p object created by literal method


// nested object
const User2 = {
    email : "rhythm@yahoo.in",
    fullname : {
        fname : "rhythm", 
        lname : "mirdha"
    }
}

console.log(User2.fullname);
console.log(User2.fullname?.fname); // ? is done for the protection when fetch object from outside : if fullname is object as key then access it else plz don't give erro

// combining objects -> objects inside objects
const allUsers = {User, User2};
console.log(allUsers);

// combining objects
const obj =  Object.assign({}, User, User2); // pehle wali field mein fill hojaaengi baaki objects ki key-val pairs
console.log(obj);

// combining objects using spread operator

const newobj = {...User, ...User2};
console.log(newobj);

// When values come from DB -> we got the array of objects
const arr = [
    {name : "rhythm", age : 21},
    {1 : "one", 2 : "two"},
    {greet : "regards"}
]

console.log(arr[0]["age"])

// to get the array of keys from object
console.log(Object.keys(User));
console.log(Object.values(User));

// to get array having each ele as array of each key-value pair
console.log(Object.entries(User));

console.log(User.hasOwnProperty("email"))
console.log(User.hasOwnProperty("name"))
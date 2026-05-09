// Destructing : 
const User = {
    name : "rhythm mirdha",
    age : 21
}

// to avoid using User.key or User['key'] fetching the data of the obj
const {name: n} = User;
console.log(n);

// concept of APIs
// now the values from backend comes in JSON format

// JSON format
// {
//     "name" : "RB",
//     "age" : "21"
// }
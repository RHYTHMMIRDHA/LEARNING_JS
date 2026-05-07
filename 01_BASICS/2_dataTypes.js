"use strict"; // treat all JS code as newer version
// as older version of js allows some mistakes silently
// engine will treat the code as newer version only

// alert("Error") -> will not work in node.js environment

// number
let age = 21
console.log(typeof age);

// bigInt
let big = 1234567890123456789n;
console.log(typeof big);
 
// string
let name = "Rhythm"
console.log(typeof name);

// boolean
let isLoggedIn = true;
console.log(typeof isLoggedIn);

// undefined -> nothing filled
let city;
console.log(typeof city); // undefined

// null -> intentially filled with nothing
let state = null;
console.log(typeof state); // object -> drawback of js

// Symbol -> for unique identification
let id = Symbol("Benwial005")

// object -> key-value pairs -> will study later
// date object -> ms from 1 jan 1970 UTC

let date = new Date(); // type : object
console.log(date);
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getMilliseconds())
console.log(date.getSeconds())
console.log(date.getMonth())
console.log(date.getTime())

console.log(date.toDateString());
console.log(date.toLocaleString());

// to customize to localeSting method
date.toLocaleString('default', {
    weekday: "long"
})


// CUSTOM DATE

let customDate = new Date(2026, 2, 21) // yyyy, mm, dd, hr, min, sec

let customFormat = new Date("2025-03-21") // yyyy-mm-dd
let customFormat2 = new Date("03-21-2025") // mm-dd-yyyy

console.log(customDate.toDateString())
console.log(customFormat.toDateString())

// TIME  ->  always compare in milliseconds

// timestamp
let time = Date.now(); // time passed till now from 1 jan 1970 in ms
console.log(time)


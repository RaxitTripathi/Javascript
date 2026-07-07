// typeof operator
// Used to find the data type of a value.
// Returns the type as a string.

console.log(typeof 10);           // number
console.log(typeof "Hello");      // string
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object (historical bug)
console.log(typeof {});           // object
console.log(typeof []);           // object
console.log(typeof function(){}); // function

console.log("--------------------------------");



// instanceof operator
// Used to check whether an object is an instance of
// a particular constructor/class.
// Returns true or false.

let arr = [1, 2, 3];
let obj = {};
let date = new Date();

console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true
console.log(obj instanceof Object);  // true
console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true

/* 
typeof → Checks the data type of a value.
instanceof → Checks whether an object was created from a specific constructor/class. */
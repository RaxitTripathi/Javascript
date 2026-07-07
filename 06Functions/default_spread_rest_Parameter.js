/*
Default Parameter:
- Assigns a default value to a function parameter if no argument is passed.

Rest Parameter (...):
- Collects multiple arguments into a single array.

Spread Operator (...):
- Expands an array or object into individual elements.
*/


// Default Parameter
function greet(name = "Guest") {
    console.log("Hello", name);
}

greet();
greet("Rakshit");


// Rest Parameter
function sum(a,b,...numbers) {
    console.log(numbers);
}

sum(10, 20, 30, 40);


// Spread Operator
let arr = [10, 20, 30];

console.log(...arr);

let newArr = [...arr, 40, 50];

console.log(newArr);
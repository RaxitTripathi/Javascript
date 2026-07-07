
/*
Arrow Function (Fat Arrow Function)
-----------------------------------
- Shorter syntax for writing functions.
- Introduced in ES6.
- Uses => (fat arrow).
*/

const greet = () => {
    console.log("Hello from Arrow Function");
};

greet();




//-----------------------------------------
// Arrow Function Variations
//-----------------------------------------


// No parameters
const hello = () => {
    console.log("Hello");
};

// One parameter (parentheses optional)
const square = num => {
    return num * num;
};

// Multiple parameters
const add = (a, b) => {
    return a + b;
};

// Single statement (implicit return)
const cube = num => num * num * num;

console.log(square(5)); // 25
console.log(add(10, 20)); // 30
console.log(cube(3)); // 27
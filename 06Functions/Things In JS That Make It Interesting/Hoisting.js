/* 
Hoisting:
Declarations are moved to the top before execution.

Function Declaration:
✅ Fully hoisted
✅ Can call before declaration

Function Expression:
❌ Not fully hoisted
❌ Call only after initialization */




// 1. Function Declaration (Works)

// Likee here we can call func declaration before it made bcoz it follow hoisting
greet();

function greet() {
    console.log("Hello from Function Declaration");
}


// 2. Function Expression (Error if called before declaration)



// Likee here we can not call func expression before it made bcoz it did not follow hoisting
// sayHi(); // ❌ ReferenceError

const sayHi = function () {
    console.log("Hello from Function Expression");
};

sayHi();






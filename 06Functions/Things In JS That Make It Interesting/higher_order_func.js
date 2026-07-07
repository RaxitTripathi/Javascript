/*
Higher-Order Function (HOF)
---------------------------
- A function that:
  1. Takes another function as an argument, OR
  2. Returns another function.
*/


// 1. Takes a function as an argument
function greet() {
    console.log("Hello");
}

function execute(fun) {
    fun();
}

execute(greet);


// 2. Returns a function
function outer() {
    return function () {
        console.log("Returned Function");
    };
}

const result = outer();
result();

// Or we can write like 

outer()()
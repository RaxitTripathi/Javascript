/*
First-Class Functions
---------------------
- In JavaScript, functions are treated like values.
- A function can be:
  1. Assigned to a variable.
  2. Passed as an argument.
  3. Returned from another function.
*/


// 1. Function assigned to a variable
const greet = function () {
    console.log("Hello");
};

greet();


// 2. Function passed as an argument
function display(fun) {
    fun();
}

display(greet);


// 3. Function returned from another function
function outer() {
    return function () {
        console.log("Returned Function");
    };
}

const result = outer();
result();

// Or we can write like 

outer()()
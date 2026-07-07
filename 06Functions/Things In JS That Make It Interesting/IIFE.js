/*
IIFE (Immediately Invoked Function Expression)
----------------------------------------------
- A function that is defined and executed immediately.
- Used to avoid polluting the global scope.
- Runs only once.
*/


// Normal IIFE
(function () {
    console.log("IIFE Executed");
})();


// IIFE with parameters
(function (name) {
    console.log("Hello " + name);
})("Rakshit");


// Arrow Function IIFE
(() => {
    console.log("Arrow IIFE");
})();
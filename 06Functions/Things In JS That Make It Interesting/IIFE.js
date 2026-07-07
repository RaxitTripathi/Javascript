/*
IIFE (Immediately Invoked Function Expression)
----------------------------------------------
- A function that is defined and executed immediately.
- Used to avoid polluting the global scope.
- Runs only once.
*/

const { useDebugValue } = require("react");


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


/* 
IIFE REAL WORLD 

IIFEs are mainly used for one-time initialization, creating private scope, and preventing global namespace pollution. Today, ES Modules have replaced most of these use cases. */
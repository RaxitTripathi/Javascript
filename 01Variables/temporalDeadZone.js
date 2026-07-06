/* TDZ (Temporal Dead Zone) is the time between entering a block and the point where a "let or const" variable is declared. During this time, the variable exists but cannot be */
{
    // TDZ starts

    console.log(a); // ❌ ReferenceError

    let a = 10;

    // TDZ ends
    console.log(a); // ✅ 10
}


// but but but


console.log(x); // ✅ undefined

var x = 10;

console.log(x); // ✅ 10

// BCOZ of hosting var behave like that 

/* 🧨 Hoisting
JavaScript prepares memory before running code.
It moves all declarations to the top — this is called hoisting.
But:
var is hoisted and set to  "undefined"
let and const are hoisted but not initialized — so accessing them early gives "ReferenceError" */


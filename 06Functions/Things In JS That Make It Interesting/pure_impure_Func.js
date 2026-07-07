/*
Pure Function
-------------
- Always returns the same output for the same input.
- Does not modify or depend on external data.
*/

// Pure Function
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30
console.log(add(10, 20)); // 30



/*
Impure Function
---------------
- Output may change for the same input.
- Depends on or modifies external data (side effects).
*/

let count = 0;

function increment() {
    count++;
    return count;
}

console.log(increment()); // 1
console.log(increment()); // 2
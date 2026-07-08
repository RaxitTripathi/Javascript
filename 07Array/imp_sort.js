// ===============================================
// sort() Method in JavaScript
// ===============================================

// sort() without compareFn:
// - Converts elements to strings.
// - Sorts them alphabetically (lexicographical order).
// - Works fine for strings, but may give wrong results for numbers.

let numbers = [100, 25, 3, 40, 5];

console.log("Original Array:", numbers);

// ----------------------------------------
// Sorting WITHOUT compareFn
// ----------------------------------------
let arr1 = [...numbers]; // Copy original array

arr1.sort();

console.log("Without compareFn:", arr1);
// Output: [100, 25, 3, 40, 5]
// Because it compares:
// "100", "25", "3", "40", "5"



// ----------------------------------------------------------------------------------------------------------------



// ----------------------------------------
// Sorting WITH compareFn (Ascending)
// ----------------------------------------
let arr2 = [...numbers];

arr2.sort((a, b) => a - b);

console.log("Ascending Order:", arr2);
// Output: [3, 5, 25, 40, 100]

// ----------------------------------------
// Sorting WITH compareFn (Descending)
// ----------------------------------------
let arr3 = [...numbers];

arr3.sort((a, b) => b - a);

console.log("Descending Order:", arr3);
// Output: [100, 40, 25, 5, 3]
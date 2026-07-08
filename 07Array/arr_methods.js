// ================================
// JavaScript Array Methods Example
// ================================

let arr = [10, 20, 30, 40, 50];

console.log("Original Array:", arr);

// ----------------------------------------------------------------------------------------------------------------
// push() -> Add element at the end
// --------------------------------
arr.push(60);
console.log("push():", arr);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// pop() -> Remove last element
// --------------------------------
arr.pop();
console.log("pop():", arr);




// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// shift() -> Remove first element
// --------------------------------
arr.shift();
console.log("shift():", arr);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// unshift() -> Add element at start
// --------------------------------
arr.unshift(5);
console.log("unshift():", arr);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// splice() -> Add/Remove elements
//array.splice(startIndex, deleteCount, item1, item2, ...)
/* startIndex → Where to start.
deleteCount → How many elements to remove.
item1, item2... → New elements to insert */
// --------------------------------
arr.splice(2, 1, 25); // Replace index 2 with 25
console.log("splice():", arr);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// slice() -> Copy part of array
// Does NOT change original array
// --------------------------------
let sliced = arr.slice(1, 4);
console.log("slice():", sliced);
console.log("Original after slice:", arr);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// reverse() -> Reverse array
// --------------------------------
arr.reverse();
console.log("reverse():", arr);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// sort() -> Sort array
// compareFn needed for numbers
// --------------------------------
let nums = [50, 10, 100, 5, 25];

let new_sort=nums.sort(function(a,b){       // we always need to declare a func and perform this operation for sort
    return a-b; // for ascending & b-a for decending
}) 

// or we can write like

let new_sort2=nums.sort((a,b) => b-a);


console.log("sort():", nums);




// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// forEach() -> Loop through each element
// Does NOT return a new array
// --------------------------------

let arr = [10, 20, 30, 40];

arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});


// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// map() -> Return new modified array
// --------------------------------
let doubled = arr.map(num => num * 2);
console.log("map():", doubled);


// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// filter() -> Return matching elements
// --------------------------------
let greaterThan20 = arr.filter(num => num > 20);
console.log("filter():", greaterThan20);


// or we can say
let greaterThan10=arr.filter(function(val){
    if(val >10) return true;     // Here true mean yes send them to new array if we write return false mean didnot send
})



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// reduce() -> Reduce array to one value
// --------------------------------
let sum = arr.reduce((total, num) => total + num, 0);
console.log("reduce():", sum);

// or we can write like

let sum2= arr.reduce(function(accumulator,val){
    return accumulator + val;
},0);     // Now intially the accumulator value is 0 like we intialize here and every time when func run the sum value get saved in accumulator and in the end we get accumulator final value as result.



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// find() -> Return first matching element
// --------------------------------
let found = arr.find(num => num > 30);
console.log("find():", found);




// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// some() -> True if ANY element matches
// --------------------------------
let hasEven = arr.some(num => num % 2 === 0);
console.log("some():", hasEven);


let hasOdd=arr.some(function(val){
    return num%2 !== 0;
})


// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// every() -> True if ALL elements match
// --------------------------------
let allPositive = arr.every(num => num > 0);
console.log("every():", allPositive);





// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// Destructuring -> Extract values
// --------------------------------
let [first, second, , ...rest] = arr;     //  now we can see an empty in index 2 it mean skip index 2 element of arr
console.log("Destructuring:");
console.log(first);
console.log(second);
console.log(rest);



// ----------------------------------------------------------------------------------------------------------------
// --------------------------------
// Spread Operator -> Copy / Merge arrays
// --------------------------------
let arr2 = [100, 200];

let copiedArray = [...arr];
console.log("Copied Array:", copiedArray);

let mergedArray = [...arr, ...arr2];
console.log("Merged Array:", mergedArray);





// push()      -> Add at end
// pop()       -> Remove last
// shift()     -> Remove first
// unshift()   -> Add at beginning
// splice()    -> Add/Remove/Replace (changes original)
// slice()     -> Copy part (doesn't change original)
// reverse()   -> Reverse original array
// sort()      -> Sort original array
// map()       -> New transformed array
// filter()    -> New filtered array
// reduce()    -> One final value
// find()      -> First matching element
// some()      -> true if at least one matches
// every()     -> true if all match
// Destructuring -> Extract values into variables
// Spread (...)  -> Copy or merge arrays
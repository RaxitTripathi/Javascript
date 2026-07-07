
// forEach loop
// Used to execute a function once for each element of an array.
// Mostly used with arrays.

// Syntax:
// array.forEach(function(element){
//     code
// });


let numbers = [10, 20, 30, 40, 50];

numbers.forEach(function(num) {      //here function is callback function.
    console.log(num);
});


//Btw notice that forEach backet start and end point 

// Output:
// 10
// 20
// 30
// 40
// 50
// ==========================
// 1. Arithmetic Operators
// ==========================
let a = 10, b = 3;

console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus
console.log(a ** b); // Exponentiation
a++;                 // Increment
b--;                 // Decrement


// ==========================
// 2. Assignment Operators
// ==========================
let x = 10;

x += 5;
x -= 2;
x *= 3;
x /= 2;
x %= 4;
x **= 2;


// ==========================
// 3. Comparison Operators
// ==========================
console.log(10 == "10");    // here true    // ==  -> Compares only values (after type coercion).     //Not strict 
console.log(10 === "10");    // here false   // === -> Compares both value and data type (no type coercion).  //Strict
console.log(10 != "10");          //same thing happend here 
console.log(10 !== "10");
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 5);


// ==========================
// 4. Logical Operators
// ==========================
console.log(true && false);
console.log(true || false);
console.log(!true);


// ==========================
// 5. Bitwise Operators
// ==========================
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(~5);
console.log(5 << 1);
console.log(5 >> 1);
console.log(5 >>> 1);



// ==========================
// 6.Unary Operators
// (Work on one operand)
// ==========================

let y = 5;

console.log(+y);      // Unary Plus       -> 5
console.log(+"10")     //Convert to 10
console.log(-y);      // Unary Minus      -> -5
console.log(++y);     // Pre Increment    -> 6
console.log(--y);     // Pre Decrement    -> 5
console.log(typeof y);// Type Operator    -> "number"
console.log(!true);   // Logical NOT      -> false

let obj = { a: 1 };
delete obj.a;         // Delete Operator

console.log(void 0);  // Void Operator    -> undefined


// ==========================
// 7. Ternary Operator
// ==========================
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");


// ==========================
// 8. Type Operators
// ==========================
console.log(typeof "Hello");

class Person {}
let p = new Person();
console.log(p instanceof Person);


// ==========================
// 9. String Operator
// ==========================
console.log("Hello " + "World");




//---------------------------------------------
// !! can be use to find Truthy and Falsy
//---------------------------------------------

console.log(!!null)
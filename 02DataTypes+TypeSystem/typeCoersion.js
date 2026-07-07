/*
====================================
TYPE COERCION
====================================

Definition:
Type coercion is JavaScript's automatic conversion
of one data type into another when performing
operations or comparisons.

Why?
- JavaScript is dynamically typed.
- It tries to make operations work automatically.

Examples:
*/

console.log("5" + 2);     // "52"  (2 converted to string)       (Bcoz  +  work here as concatination bcoz here 5 is string )
console.log("5" - 2);     // 3     ("5" converted to number)    (There is no other option for - other than subtract so it convert "5" to 5)
console.log("10" * "2");  // 20    (Both converted to numbers)
console.log(true + 1);    // 2     (true -> 1)
console.log(false + 5);   // 5     (false -> 0)



/*
====================================
TRUTHY VALUES
====================================

Definition:
Values that behave like true in a boolean context.

Examples:
*/

if ("Hello") console.log("Truthy");
if (1) console.log("Truthy");
if ([]) console.log("Truthy");
if ({}) console.log("Truthy");
if (-10) console.log("Truthy");

/*
Common Truthy Values:
- true
- Any non-zero number
- Any non-empty string
- []
- {}
- function(){}
*/



/*
====================================
FALSY VALUES
====================================

Definition:
Values that behave like false in a boolean context.

JavaScript has only 8 falsy values:
*/

console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

/*
Falsy Values:
1. false
2. 0
3. -0
4. 0n (BigInt zero)
5. "" (empty string)
6. null
7. undefined
8. NaN   (Not a Number)
*/

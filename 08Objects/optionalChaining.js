/*
=========================================
        OPTIONAL CHAINING (?.) IN JS
=========================================

What is Optional Chaining?

- Optional Chaining (?.) is an operator that safely accesses
  object properties, methods, or array elements.
- If a property before ?. is null or undefined,
  JavaScript DOES NOT throw an error.
- Instead, it simply returns undefined.

Syntax:
object?.property
object?.method()
array?.[index]

-----------------------------------------
Without Optional Chaining
-----------------------------------------
If an intermediate property doesn't exist,
JavaScript throws a TypeError.

Example:
user.address.city

If user.address is undefined,
JS tries to read:

undefined.city

which causes:

TypeError: Cannot read properties of undefined

To avoid this WITHOUT optional chaining,
we have to manually check every level using
if statements or && operators.

-----------------------------------------
With Optional Chaining
-----------------------------------------
user.address?.city

If address doesn't exist,
JavaScript stops there and returns undefined.

No error.
Much cleaner code.
*/


// =======================================
// WITHOUT OPTIONAL CHAINING
// =======================================

const user1 = {
    name: "Rakshit"
    // address does not exist
};

// Manual checking
if (user1.address) {
    console.log(user1.address.city);
} else {
    console.log("Address not found");
}

// Another way using &&
console.log(user1.address && user1.address.city);



// =======================================
// WITH OPTIONAL CHAINING
// =======================================

const user2 = {
    name: "Rakshit"
    // address does not exist
};

// No manual checking required
console.log(user2.address?.city);   // undefined



// =======================================
// ANOTHER EXAMPLE
// =======================================

const student = {
    name: "Rahul",
    address: {
        city: "Delhi",
        pincode: 110001
    }
};

// Existing property
console.log(student.address?.city);       // Delhi

// Missing property
console.log(student.address?.country);    // undefined

// Missing object
console.log(student.contact?.phone);      // undefined



// =======================================
// OPTIONAL CHAINING WITH METHODS
// =======================================

const person = {
    greet() {
        console.log("Hello!");
    }
};

person.greet?.();     // Hello!
person.bye?.();       // No error



// =======================================
// OPTIONAL CHAINING WITH ARRAYS
// =======================================

const numbers = [10, 20, 30];

console.log(numbers?.[0]); // 10
console.log(numbers?.[5]); // undefined



// =======================================
// SUMMARY
// =======================================

/*
Without Optional Chaining:
--------------------------
user.address.city
❌ Throws TypeError if address is undefined.

With Optional Chaining:
-----------------------
user.address?.city
✅ Returns undefined instead of throwing an error.

Advantages:
✔ Cleaner code
✔ No nested if statements
✔ Prevents runtime errors
✔ Very useful when working with APIs and JSON data
*/
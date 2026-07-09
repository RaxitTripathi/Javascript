// ====================================================================================
// STYLE MANIPULATION
// ====================================================================================

// JavaScript can change CSS styles dynamically.

let h1 = document.querySelector("h1");

// Changing CSS properties
h1.style.color = "red";
h1.style.backgroundColor = "yellow";

// style is an object that contains all CSS properties.
console.dir(h1);


// ====================================================================================
// CLASS MANIPULATION (Most Commonly Used)
// ====================================================================================

// Instead of changing styles one by one using .style,
// developers usually create CSS classes and then add/remove them using JavaScript.

// HTML
// <h1>Hello DOM</h1>

// CSS
/*
.red{
    color:red;
}

.bg-yellow{
    background-color:yellow;
}

.big{
    font-size:50px;
}
*/

// Access all classes of an element
console.log(h1.classList);


// ====================================================================================
// 1. add()
// ====================================================================================

// Adds one or more classes.

h1.classList.add("red");
h1.classList.add("big");


// ====================================================================================
// 2. remove()
// ====================================================================================

// Removes the specified class.

h1.classList.remove("red");


// ====================================================================================
// 3. toggle()
// ====================================================================================

// If the class exists → removes it.
// If the class doesn't exist → adds it.

h1.classList.toggle("bg-yellow");


// ====================================================================================
// 4. contains()
// ====================================================================================

// Checks whether a class exists or not.

console.log(h1.classList.contains("big")); // true or false


// ====================================================================================
// QUICK REVISION
// ====================================================================================

/*

Property / Method          Purpose
---------------------------------------------------------
style                      Access inline CSS
classList                  Access all classes
add()                      Add class
remove()                   Remove class
toggle()                   Add if absent, Remove if present
contains()                 Check if class exists

*/
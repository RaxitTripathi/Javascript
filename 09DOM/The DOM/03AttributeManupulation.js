// ====================================================================================
// ATTRIBUTE MANIPULATION
// ====================================================================================

// What is an Attribute?
// ----------------------
// Attributes are extra information added to HTML elements.
// They define or modify the behavior of an element.
//
// Examples:
// id, class, href, src, alt, title, type, value, placeholder, etc.


// HTML
// <a href="">Download now</a>
// <img src="" alt="Broken Image">


// ====================================================================================
// SELECT ELEMENTS
// ====================================================================================

let a = document.querySelector("a");
let img = document.querySelector("img");


// ====================================================================================
// 1. GET ATTRIBUTE
// ====================================================================================

// Returns the value of the specified attribute.

console.log(a.getAttribute("href"));   // ""
console.log(img.getAttribute("alt"));  // "Broken Image"


// ====================================================================================
// 2. SET ATTRIBUTE
// ====================================================================================

// Adds a new attribute or updates an existing one.

a.setAttribute("href", "https://www.google.com");

img.setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1677916317230-d9b78d675264?w=600&auto=format&fit=crop&q=60"
);


// ====================================================================================
// 3. REMOVE ATTRIBUTE
// ====================================================================================

// Removes the specified attribute completely.

img.removeAttribute("alt");

// Before:
// <img src="" alt="Broken Image">

// After:
// <img src="">


// ====================================================================================
// 4. ACCESS ATTRIBUTES DIRECTLY (Most Common)
// ====================================================================================

// Many common attributes can also be accessed as properties.

a.href = "https://www.google.com";
img.src = "image.jpg";

console.log(a.href);
console.log(img.src);


// ====================================================================================
// QUICK REVISION
// ====================================================================================

/*

Method                         Purpose
--------------------------------------------------------
getAttribute(name)             Get attribute value
setAttribute(name, value)      Add/Update attribute
removeAttribute(name)          Remove attribute


Examples

element.getAttribute("href");

element.setAttribute("href","https://google.com");

element.removeAttribute("href");
*/
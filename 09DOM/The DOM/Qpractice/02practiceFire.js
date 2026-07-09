// ====================================================================================
// CSS SELECTORS IN JAVASCRIPT (querySelector & querySelectorAll)
// ====================================================================================

// querySelector() and querySelectorAll() use CSS Selectors.
// So, almost every CSS selector can also be used in JavaScript!


// ====================================================================================
// BASIC SELECTORS
// ====================================================================================

// By Tag
document.querySelector("h1");

// By ID (#)
document.querySelector("#greeting");

// By Class (.)
document.querySelector(".box");

// By Attribute
document.querySelector("[href]");

// By Multiple Classes
document.querySelector(".box.active");

// By Descendant (space)
// Selects all <li> inside a <ul>
document.querySelectorAll("ul li");

// By Direct Child (>)
// Selects only direct children
document.querySelectorAll("ul > li");


// ====================================================================================
// PSEUDO-CLASS SELECTORS
// ====================================================================================

// Pseudo-classes help select elements based on their position or state.

// ----------------------------------------------------------------------
// :first-child
// Selects the FIRST child.
// ----------------------------------------------------------------------

document.querySelector("li:first-child");


// HTML
/*
<ul>
    <li>Apple</li>      <-- Selected
    <li>Mango</li>
    <li>Banana</li>
</ul>
*/


// ----------------------------------------------------------------------
// :last-child
// Selects the LAST child.
// ----------------------------------------------------------------------

document.querySelector("li:last-child");


// HTML
/*
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>     <-- Selected
</ul>
*/


// ----------------------------------------------------------------------
// :nth-child(n)
// Selects a specific child.
// ----------------------------------------------------------------------

document.querySelector("li:nth-child(3)");


// HTML
/*
<ul>
    <li>Apple</li>
    <li>Mango</li>
    <li>Banana</li>     <-- Selected
</ul>
*/


// ----------------------------------------------------------------------
// :nth-child(even)
// Selects all EVEN positioned children.
// ----------------------------------------------------------------------

document.querySelectorAll("li:nth-child(even)");


// HTML
/*
<ul>
    <li>Apple</li>      // 1
    <li>Mango</li>      // 2 <-- Selected
    <li>Banana</li>     // 3
    <li>Orange</li>     // 4 <-- Selected
    <li>Kiwi</li>       // 5
</ul>
*/


// ----------------------------------------------------------------------
// :nth-child(odd)
// Selects all ODD positioned children.
// ----------------------------------------------------------------------

document.querySelectorAll("li:nth-child(odd)");


// HTML
/*
<ul>
    <li>Apple</li>      // 1 <-- Selected
    <li>Mango</li>      // 2
    <li>Banana</li>     // 3 <-- Selected
    <li>Orange</li>     // 4
    <li>Kiwi</li>       // 5 <-- Selected
</ul>
*/


// ----------------------------------------------------------------------
// :nth-child(2n)
// Selects every 2nd child.
// Same as :nth-child(even)
// ----------------------------------------------------------------------

document.querySelectorAll("li:nth-child(2n)");


// Math behind 2n
/*
n = 1  → 2 × 1 = 2
n = 2  → 2 × 2 = 4
n = 3  → 2 × 3 = 6
n = 4  → 2 × 4 = 8

Selected:
2, 4, 6, 8...
*/


// ----------------------------------------------------------------------
// :nth-child(3n)
// Selects every 3rd child.
// ----------------------------------------------------------------------

document.querySelectorAll("li:nth-child(3n)");


// Math
/*
n = 1 → 3
n = 2 → 6
n = 3 → 9

Selected:
3, 6, 9...
*/





// ====================================================================================
// REAL EXAMPLE
// ====================================================================================

// Add a CSS class to every even list item.

let evenItems = document.querySelectorAll("ul li:nth-child(even)");

evenItems.forEach(function (item) {
    item.classList.add("highlight");
});


// CSS
/*
.highlight{
    background-color: yellow;
    color: black;
}
*/




// ====================================================================================
// MEMORY TRICK
// ====================================================================================

/*

#   → ID
.   → Class
>   → Direct Child
(space) → Descendant

:first-child   → First
:last-child    → Last
:nth-child(n)  → Specific Position

odd    → 1,3,5...
even   → 2,4,6...
2n      → Every 2nd
3n      → Every 3rd

*/
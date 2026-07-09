// ====================================================================================
// SELECTING ELEMENTS IN DOM
// ====================================================================================

// 1. getElementById()
// -------------------
// Selects ONE element using its unique id.
// Returns: Element (or null if not found)

let selectingId = document.getElementById("greeting");
console.dir(selectingId); // console.dir() shows all object properties


// 2. getElementsByClassName()
// ---------------------------
// Selects ALL elements having the given class.
// Returns: HTMLCollection (Live Collection)

let selectingClass = document.getElementsByClassName("myclass");
console.dir(selectingClass);


// 3. getElementsByTagName()
// -------------------------
// Selects ALL elements with the given tag name.
// Returns: HTMLCollection (Live Collection)

let selectingTag = document.getElementsByTagName("h1");
console.dir(selectingTag);




// ====================================================================================
// ====================================================================================
// MODERN DOM SELECTORS (Most Commonly Used)
// ====================================================================================
// ====================================================================================

// querySelector() and querySelectorAll() are the most commonly used selectors
// because they use CSS selectors.

// 4. querySelector()
// ------------------
// Selects ONLY the FIRST matching element.
// Returns: Element

let selecting = document.querySelector("h1");
console.dir(selecting);

// Examples:
// document.querySelector("#greeting");   // Select by id
// document.querySelector(".myclass");    // Select by class
// document.querySelector("h1");          // Select by tag


// 5. querySelectorAll()
// ---------------------
// Selects ALL matching elements.
// Returns: NodeList (Static Collection)

let selectingAll = document.querySelectorAll("h1");
console.dir(selectingAll);

// Examples:
// document.querySelectorAll(".myclass");
// document.querySelectorAll("p");
// document.querySelectorAll("#greeting");






// ====================================================================================
// QUICK REVISION
// ====================================================================================

/*

Method                              Returns
------------------------------------------------------------
getElementById()                    Element
getElementsByClassName()            HTMLCollection (Live)
getElementsByTagName()              HTMLCollection (Live)
querySelector()                     Element (First Match)
querySelectorAll()                  NodeList (Static)

Remember:

ID            → Element
Elements      → HTMLCollection
Selector      → First Element
SelectorAll   → NodeList

*/
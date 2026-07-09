// ====================================================================================
// DYNAMIC DOM MANIPULATION
// ====================================================================================

// Dynamic DOM Manipulation:
// Creating, adding, removing or modifying HTML elements using JavaScript.


// ====================================================================================
// 1. CREATE ELEMENT
// ====================================================================================

// Step 1: Create the element
let h1 = document.createElement("h1");

// Step 2: Add content
h1.textContent = "Hlo bhai how are you?";


// ====================================================================================
// 2. APPEND()
// ====================================================================================

// Adds the element at the END of the selected parent.

document.querySelector("body").append(h1);

/*

Before

<body>
    <h1>Hello DOM</h1>
</body>

After append()

<body>
    <h1>Hello DOM</h1>
    <h1>Hlo bhai how are you?</h1>
</body>

*/


// ====================================================================================
// 3. PREPEND()
// ====================================================================================

// Adds the element at the BEGINNING of the selected parent.

let h2 = document.createElement("h2");
h2.textContent = "I am added using prepend";

document.querySelector("body").prepend(h2);

/*

Before

<body>
    <h1>Hello DOM</h1>
</body>

After prepend()

<body>
    <h2>I am added using prepend</h2>
    <h1>Hello DOM</h1>
</body>

*/


// ====================================================================================
// 4. appendChild()
// ====================================================================================

// Works like append() but accepts only Node objects.
// Returns the appended node.

let p = document.createElement("p");
p.textContent = "Paragraph added using appendChild()";

document.body.appendChild(p);


// ====================================================================================
// 5. removeChild()
// ====================================================================================

// Removes a child element from its parent.

let heading = document.querySelector("h1");

// Remove the first h1 from body
document.body.removeChild(heading);


// ====================================================================================
// 6. remove()
// ====================================================================================

// Removes the selected element directly.
// (Modern and easier than removeChild())

let para = document.querySelector("p");
para.remove();


// ====================================================================================
// QUICK REVISION
// ====================================================================================

/*

Method                  Purpose
---------------------------------------------------------
createElement()         Creates a new HTML element
append()                Adds at the END
prepend()               Adds at the BEGINNING
appendChild()           Adds a child node           //Older
removeChild()           Removes a child node          //Older
remove()                Removes the element itself

*/
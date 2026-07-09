// ====================================================================================
// CONTENT / TEXT ACCESS
// ====================================================================================

// Step 1: Select the element
let h1 = document.querySelector("h1");

// console.dir() displays the DOM object (Node/Element) in the console.
// From there, you can inspect its properties and understand the DOM tree.
console.dir(h1);


// ====================================================================================
// CHANGING CONTENT
// ====================================================================================

// 1. textContent
// Gets or sets ALL text inside the element (including hidden text).
h1.textContent = "Hello I am Batman";


// 2. innerText
// Gets or sets ONLY the visible text as rendered on the webpage.
h1.innerText = "Hello I am Batman";


// 3. innerHTML
// Gets or sets the HTML content inside the element.
// HTML tags are parsed and rendered.
h1.innerHTML = "<i>Hello I am Batman</i>";



// ====================================================================================
// DIFFERENCE
// ====================================================================================

/*

Property        Reads HTML?   Hidden Text?   Can Add HTML?
------------------------------------------------------------
textContent        ❌ No          ✅ Yes          ❌ No
innerText          ❌ No          ❌ No           ❌ No
innerHTML          ✅ Yes         ✅ Yes          ✅ Yes

Examples:

textContent
------------
<h1>Hello <b>DOM</b></h1>

Returns:
"Hello DOM"


innerText
----------
Returns only the visible text as shown on the page.
(It ignores text hidden with CSS like display: none.)


innerHTML
----------
<h1>Hello <b>DOM</b></h1>

Returns:
"Hello <b>DOM</b>"

*/









/* 
Memory Trick:

📝 textContent → Text only
👀 innerText → Visible text
🏗️ innerHTML → HTML + Text */
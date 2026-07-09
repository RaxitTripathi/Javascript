# DOM (Document Object Model) Notes

## What is DOM?

The **DOM (Document Object Model)** is a programming interface that represents an HTML document as a **tree of objects**.

JavaScript uses the DOM to:

* Access HTML elements
* Change content
* Change CSS styles
* Add or remove elements
* Handle user events

**Simple Definition:**

> DOM is the bridge between JavaScript and HTML.

---

# DOM Tree Example

HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM</title>
</head>
<body>
    <h1>Hello</h1>
    <p>Welcome</p>
</body>
</html>
```

DOM Tree

```
Document
│
└── html
    │
    ├── head
    │    └── title
    │
    └── body
         ├── h1
         └── p
```

Every HTML tag becomes an object (node).

---

# Why Do We Need DOM?

Without DOM:

* HTML is static.

With DOM:

* Change text
* Change styles
* Create elements
* Remove elements
* Respond to clicks
* Build interactive websites

---

# DOM Manipulation

DOM Manipulation means:

> Using JavaScript to access and modify HTML elements.

Example:

```js
document.getElementById("title").innerText = "Hello JavaScript";
```

---

# Selecting Elements

## 1. getElementById()

Selects an element using its id.

```js
const heading = document.getElementById("title");
```

Returns:

* One element
* null if not found

---

## 2. getElementsByClassName()

Returns all elements having a class.

```js
const boxes = document.getElementsByClassName("box");
```

Returns:

* HTMLCollection

---

## 3. getElementsByTagName()

Returns all elements with a specific tag.

```js
const paragraphs = document.getElementsByTagName("p");
```

Returns:

* HTMLCollection

---

## 4. querySelector()

Returns the first matching element.

```js
document.querySelector("#title");

document.querySelector(".box");

document.querySelector("p");
```

---

## 5. querySelectorAll()

Returns all matching elements.

```js
const items = document.querySelectorAll(".item");
```

Returns:

* NodeList

---

# HTMLCollection vs NodeList

| HTMLCollection             | NodeList                       |
| -------------------------- | ------------------------------ |
| Live                       | Usually Static                 |
| No forEach()               | Supports forEach()             |
| Returned by getElements... | Returned by querySelectorAll() |

---

# Changing Content

## innerText

Gets or changes visible text.

```js
heading.innerText = "Hello";
```

---

## textContent

Gets all text.

```js
heading.textContent = "Welcome";
```

---

## innerHTML

Gets or changes HTML.

```js
heading.innerHTML = "<span>Hello</span>";
```

---

# Changing Attributes

## getAttribute()

```js
img.getAttribute("src");
```

---

## setAttribute()

```js
img.setAttribute("src","image.png");
```

---

## removeAttribute()

```js
img.removeAttribute("disabled");
```

---

# Working with Classes

## className

```js
element.className = "box";
```

---

## classList

### add()

```js
element.classList.add("active");
```

### remove()

```js
element.classList.remove("active");
```

### toggle()

```js
element.classList.toggle("dark");
```

### contains()

```js
element.classList.contains("active");
```

---

# Changing CSS

```js
element.style.color = "red";

element.style.backgroundColor = "yellow";

element.style.fontSize = "30px";
```

---

# Creating Elements

```js
const div = document.createElement("div");
```

---

# Adding Elements

## append()

```js
parent.append(child);
```

---

## appendChild()

```js
parent.appendChild(child);
```

---

## prepend()

```js
parent.prepend(child);
```

---

## before()

```js
element.before(newElement);
```

---

## after()

```js
element.after(newElement);
```

---

# Removing Elements

```js
element.remove();
```

or

```js
parent.removeChild(child);
```

---

# Traversing the DOM

## Parent

```js
element.parentElement;
```

---

## Children

```js
element.children;
```

---

## First Child

```js
element.firstElementChild;
```

---

## Last Child

```js
element.lastElementChild;
```

---

## Next Sibling

```js
element.nextElementSibling;
```

---

## Previous Sibling

```js
element.previousElementSibling;
```

---

# Events

An event is an action performed by the user.

Examples:

* Click
* Double Click
* Mouse Move
* Key Press
* Submit
* Input

---

## addEventListener()

```js
button.addEventListener("click", function(){
    console.log("Clicked");
});
```

---

## Arrow Function

```js
button.addEventListener("click", () => {
    console.log("Clicked");
});
```

---

# Common Events

```text
click
dblclick
mouseover
mouseout
mousemove
keydown
keyup
keypress
submit
change
input
focus
blur
```

---

# Event Object

```js
button.addEventListener("click",(event)=>{
    console.log(event);
});
```

Useful properties:

```js
event.target

event.type

event.key

event.clientX

event.clientY
```

---

# Prevent Default

Stops the browser's default behavior.

```js
form.addEventListener("submit",(event)=>{
    event.preventDefault();
});
```

---

# Event Bubbling

Events travel:

```
Child
↑
Parent
↑
Body
↑
Document
```

Default behavior:
Bottom → Top

---

# Event Delegation

Instead of adding listeners to many children,
add one listener to the parent.

Benefits:

* Better performance
* Less code
* Works for dynamically added elements

---

# DOM Loading Events

```js
DOMContentLoaded
```

Runs after HTML loads.

```js
window.onload
```

Runs after HTML + CSS + Images load.

---

# Useful DOM Properties

```js
document.title

document.URL

document.body

document.head

document.forms

document.images

document.links
```

---

# Common DOM Methods

```js
getElementById()

getElementsByClassName()

getElementsByTagName()

querySelector()

querySelectorAll()

createElement()

append()

appendChild()

prepend()

remove()

removeChild()

setAttribute()

getAttribute()

removeAttribute()

addEventListener()

classList.add()

classList.remove()

classList.toggle()

classList.contains()
```

---

# Difference Between innerText, textContent and innerHTML

| Property    | Description                 |
| ----------- | --------------------------- |
| innerText   | Visible text only           |
| textContent | All text inside the element |
| innerHTML   | HTML + Text                 |

---

# Difference Between append() and appendChild()

| append()               | appendChild()                  |
| ---------------------- | ------------------------------ |
| Can add multiple nodes | Adds one node                  |
| Can add text directly  | Cannot add plain text directly |
| Modern method          | Older method                   |

---

# Difference Between HTMLCollection and NodeList

| HTMLCollection             | NodeList                       |
| -------------------------- | ------------------------------ |
| Live                       | Usually Static                 |
| No forEach()               | Supports forEach()             |
| Returned by getElements... | Returned by querySelectorAll() |

---

# DOM Manipulation Workflow

```
Select Element
      ↓
Read Data
      ↓
Modify Content
      ↓
Modify Style
      ↓
Add Events
      ↓
Create / Remove Elements
```

---

# Interview Definitions

### DOM

A tree-like representation of an HTML document that allows JavaScript to access and manipulate web pages.

### DOM Manipulation

Using JavaScript to create, read, update, delete, or modify HTML elements.

### Node

Any object in the DOM tree (element, text, comment, etc.).

### Element

A specific HTML tag represented as a node in the DOM.

### Event

An action performed by the user or browser that JavaScript can respond to.

### Event Listener

A function that waits for an event and executes code when the event occurs.

---

# Summary

✔ DOM connects JavaScript with HTML.

✔ Every HTML element becomes an object.

✔ Use selectors to access elements.

✔ Modify text using `innerText`, `textContent`, or `innerHTML`.

✔ Modify CSS using `.style` and `.classList`.

✔ Create elements with `createElement()`.

✔ Add elements using `append()`, `appendChild()`, or `prepend()`.

✔ Remove elements using `remove()` or `removeChild()`.

✔ Handle user interactions with `addEventListener()`.

✔ Learn event bubbling and event delegation for writing efficient JavaScript.

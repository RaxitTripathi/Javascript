// Select all <li> elements and print their text using forEach()

let lst = document.querySelectorAll("li");

// querySelectorAll() returns a NodeList (array-like collection),
// so we can easily use the forEach() method.

lst.forEach(function (val) {
    console.log(val.textContent);
});
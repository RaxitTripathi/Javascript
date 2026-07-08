// Computed Properties
// - Used to create dynamic object property names.
// - Uses [] around a variable or expression.
// - Without [], the property name is taken literally.

// Without Computed Property
const key = "name";

const obj1 = {
    key: "Rakshit"
};

console.log(obj1); // { key: "Rakshit" }



// With Computed Property
const obj2 = {
    [key]: "Rakshit"
};

console.log(obj2); // { name: "Rakshit" }


// Another Example
const num = 1;

const obj3 = {
    ["user" + num]: "Rahul"
};

console.log(obj3); // { user1: "Rahul" }
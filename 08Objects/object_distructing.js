const student = {
    name: "Rakshit",
    age: 22,
    course: "B.Tech"
};

// Object Destructuring
const { name, age, course } = student;

console.log(name);    // Rakshit
console.log(age);     // 22
console.log(course);  // B.Tech




// or rename variable





const students = {
    name: "Rakshit",
    age: 22
};

// Rename while destructuring
const { name: studentName, age: studentAge, sclass = "Btech 3rd" } = students;

console.log(studentName); // Rakshit
console.log(studentAge);  // 22
console.log(sclass);       // Here  sclass=btech 3rd is default value if sclass not present in students










// Also we can do like


let user = {
name: "Amit",
address: {
city: "Delhi",
pincode: 110001
}
};

let {city,pincode} = user.address;
console.log(city);
let student = {
name: "Ravi",
age: 21,
isEnrolled: true
};

for(let key in student){
    console.log(key);
    console.log(student[key]);   // here student.key is wrong 
}



//  WE can also accesss key value pair like this 


// They come in array format
console.log(Object.keys(student));
console.log(Object.values(student));
console.log( Object.entries(student));
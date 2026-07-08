//Now the problem with nested Object is:
//When we try to copy to another using spread operation non nested part do a deep copy but nested part do a reference copy mean  change in one object lead change to other so we do Deep copy 

let user = {
name: "Amit",
address: {
city: "Delhi",
pincode: 110001
}
};

let user2=JSON.parse(JSON.stringify(user));    // See how it work first JSON.stringify convert object user to string then JSON.parse reconvert this string to object 
console.log(user2);

// Note: JSON-based copy works only for plain data (no functions, undefined, etc.)
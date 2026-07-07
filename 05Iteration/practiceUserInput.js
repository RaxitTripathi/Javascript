//Wap took input from user and then from 1 to that number print all odd even

let user = Number(prompt("Enter a number:"));      // This prompt will only work for browser We will learn input type which is mostly used in js later

for (let i=1;i<=user;i++){
    if(i%2==0) console.log(`${i} -> Even\n`)
    else console.log(`${i} -> Odd\n`)
}



/* 
// IMPORTANT:
// JavaScript input method depends on the environment where code runs.
//
// Browser:
// → prompt() for basic input
// → DOM (HTML input + JavaScript) is the real-world frontend method
//
// Node.js (VS Code / Terminal):
// → readline module is used for taking input
//
// Unlike C/C++, JavaScript does not have one fixed input method for all environments. */
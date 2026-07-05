// var -> Function-scoped variable (old way, can be redeclared and reassigned)
var age = 20;
var age=12;  //It will accept thats why let comes


// let -> Block-scoped variable (can be reassigned, cannot be redeclared in the same scope)
let name = "Rakshit";


// const -> Block-scoped constant (cannot be reassigned, must be initialized)
const PI = 3.14159;
/* � But: If 
const
 holds an object/array, you can still change its contents:
 */
{
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // ✅ 10
console.log(b); // ❌ ReferenceError
console.log(c); // ❌ ReferenceError



/* 
🔥 Scope in Real Life
.Block Scope → Code inside {} like in loops, 
.Function Scope → Code inside a function
.let and const follow block scope.
.var ignores block scope — which leads to bugs. */
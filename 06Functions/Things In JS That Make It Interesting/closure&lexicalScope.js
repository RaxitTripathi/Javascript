/*
Lexical Scope
-------------
- A function can access variables from its parent (outer) scope.
- Scope is determined by where the function is written.
*/



//In simple mean scope of varibles declare inside func like here message scope is full func but newMsg scope only inner func it cannot be used outside like here in outer func
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message); // Accessing outer variable
        let newMsg="BUFFALO";
    }

    inner();
}

outer();



/*
Closure
-------
- A closure is created when an inner function remembers and
  can access variables from its outer function even after
  the outer function has finished executing.
*/


// Like here count which declare in inner func was borrow or use from outer func
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment(); // 1
increment(); // 2
increment(); // 3
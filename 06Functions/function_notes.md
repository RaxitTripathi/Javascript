## Q: What is the difference between Higher-Order Function and Closure?

### Higher-Order Function (HOF)
**Ans:**
A function that takes another function as an argument or returns a function is called a Higher-Order Function.

Example:
```javascript
function operate(fn) {
    fn();
}

operate(() => {
    console.log("Hello");
});


### Closure
**Ans:**
A closure is a function that remembers and can access variables from its outer function even after the outer function has finished executing.

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

let counter = outer();

counter(); // 1
counter(); // 2
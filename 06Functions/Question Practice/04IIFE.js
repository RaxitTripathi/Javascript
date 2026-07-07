// "Use IIFE to isolate variable"

(function (){
    let weight =65;
    let height=1.82;
    let bmi=(weight /(height ** 2)).toFixed(2);
    console.log(bmi);
})()
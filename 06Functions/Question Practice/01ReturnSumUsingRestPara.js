// Use rest para to accept any no of scores and return total


function score(...scores){
    let total=0;
    scores.forEach(function(val){
        total += val;
    });
    return total;
}

let total_score = score(10,20,30,40,50)
console.log(`Total score => ${total_score} `)
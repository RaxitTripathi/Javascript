/* //Wap of BMI calc

// BMI = Weight (kg) / (Height (m) × Height (m))

BMI Categories
BMI	Category
Less than 18.5	Underweight
18.5 – 24.9	Normal Weight
25.0 – 29.9	Overweight
30.0 or above	Obese */


function bmi(weight,height){
    let bmi=(weight /(height ** 2)).toFixed(2);
    if (bmi >= 30.0) return `Obese with Bmi => ${bmi}`;
    else if(bmi >= 25.0) return `Overweight with Bmi => ${bmi}`;
    else if(bmi >=18.5) return `Normal weight with Bmi => ${bmi}`;
    else return `Underweight with Bmi => ${bmi}`;
}

let category=bmi(65,1.8288)

console.log(`Your weight category => ${category}`)
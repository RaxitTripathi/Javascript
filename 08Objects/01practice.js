//Use object.entries() to print al key value pair as:
//title:JS
//duration:4 week

let course={
    title:"JS",
    duration:"4 week",
}

Object.entries(course).forEach(function(val){
    console.log(val[0]+":"+val[1]);
});
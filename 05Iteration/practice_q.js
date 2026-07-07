//print 5 odd no only from 1-100

let counter=0
for(let i=1;i<=100;i++){
    if(counter >=5){
        break;
    }
    if(i%2!=0){ 
        console.log(`${i}`);
        counter +=1
    }
}
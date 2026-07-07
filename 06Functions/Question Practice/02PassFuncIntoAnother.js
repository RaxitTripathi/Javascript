//Wap to pass a func into anoter func and execute it inside


function outer(val){
    val();
}

outer(function inner(){
    console.log("Getting Call");
})
function once(){
    let count = 0;
    return function(){
        if(count === 0){
            count = 1;
            console.log('function has been used once' )
        }
        else{
            console.log("function cannot be called multiple times")
        }
    } 
}
let stored = once();
stored();
stored();



function fetchApi(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('request 1 has been resolved');
        },20000)

    })
    return promise;
}

function fetchApi2(){
    let promise = new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('request 2 has been resolved');
        },10000)

    })
    return promise;
}

function interrupter(){
    console.log('i was called');
}
async function handleMySelf(){

    let promiseRespose2 = await fetchApi2();
    console.log(promiseRespose2)

    let promiseRespose = await fetchApi();
    console.log(promiseRespose)
}

handleMySelf();


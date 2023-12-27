let p1 = new Promise(function(resolve,reject){
    //setTimeout(() => {resolve('p1 successfull')},1000);
    setTimeout(() => {reject('p1 failed')},1000);
})

let p2 = new Promise(function(resolve,reject){
    setTimeout(() => {resolve('p2 successfull')},2000);
})

let p3 = new Promise(function(resolve,reject){
    setTimeout(() => {resolve('p3 successfull')},2000);
})

Promise.any([p1,p2,p3])
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.error(err);
})
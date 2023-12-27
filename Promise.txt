const cart = true;

createOrderId(cart)
.then(function(orderId){
    console.log(orderId)
    return orderId;
})
.then(function(orderId){
    return createPayment(orderId);
})
.then(function(message){
    createSuccessMessage(message);
    console.log(message)
})
.catch(function(err){
    console.log(err.message);
})


function createOrderId(cart){
    let orderId = 1234
    const promise = new Promise(function(resolve,reject){
        if(validateCart(cart)){
            resolve(orderId)
        }
        else{
            const error = new Error('Invalid cart');
            reject(error);
        }
    })
    return promise;
}

function validateCart(cart){
    return cart;
}

function createPayment(orderId){
    const message = 'successfull'
    let promise = new Promise(function(resolve,reject){
        if(orderId === 1){
            resolve(message)
        }
        else{
            let error = new Error('order Id does not exist')
            reject(error);
        }
    })
    return promise;
}

function createSuccessMessage(message){
    return new Promise(function(resolve, reject){
        resolve(message);
    })
}
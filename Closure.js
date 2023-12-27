function greet(message){
    greetMessage = message;
    function welcome(name){
        console.log(greetMessage + ' ' + name);
    }

    return welcome;
}

let demo = greet('hello');
demo('Sojeth');
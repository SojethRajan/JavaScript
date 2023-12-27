const loopOver = (array, justPrint) => {
    for(let i = 0; i < array.length; i++){
        justPrint(array[i]);
    }
}

const justPrint = (val) => {
    console.log(val);
}

const numbers = [1,2,3,4,5];
//loopOver(numbers,justPrint);


let countDown = (number, display) => {
    if(number == 0){
        return;
    }
    display(number);
    countDown(--number,display)
}

countDown(3,justPrint);
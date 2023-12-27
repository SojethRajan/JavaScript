const radius = [3,1,2,4];

function area(radius){
    return Math.PI * radius * radius;
}

function diameter(radius){
    return 2 * radius;
}

function calculate(radius,task){
    let output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(task(radius[i]));
    }
    console.log(output);
}


calculate(radius,diameter);

const output = radius.map(diameter)
console.log(output);
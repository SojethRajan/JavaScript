function square(side){
    return{
        side : side,
        greet : function(side){
            console.log(this.side);
        }
    }
}

function Square(side){
    this.side = side;
    this.greet = function(side,display){
        console.log(side);
        display(this.side);
    }
}

const sq = square(1);

const display = function(val){
    console.log(val);
}

const box = new Square(4);
box.greet(1.4,display);


//concatinating

function join(seperator, ...strings){
    let output = '';
    strings.forEach((string, i) => {
        if( i == strings.length - 1){
            return output += string;
        }
        output += string + seperator;
    })
    return output;
}

const result = join('-', 'Sojeth','Luffy','Zoro');

//RE-Structuring

const [captian, swordsman, navigator, musician, ...rest] = ['luffy' , 'zoro', 'Nami', 'Brook', 'chopper', 'Usopp', 'Sanji', 'Franky', 'Robin'];

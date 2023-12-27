function Person(name, age, isMember = true){
    this.name = name;
    this.age = age;
    this.isMember = isMember;

    this.greet = function(){
        console.log('Hello ' + this.name)
    }
}

function Student(name, age, isPass){
    this.name = name;
    this.age = age;
    this.isPass = isPass;
}


const sojeth = new Person('sojeth', 23);

let stud = new Student('john',12,false);

//stud = Object.create(new Person(stud.name,31));

stud.__proto__ = sojeth;

stud.greet();


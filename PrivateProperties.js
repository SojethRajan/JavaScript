class Circle{
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }

    get getRadius(){
        return this.#radius;
    }

    set setRadius(radius){
        this.#radius = radius;
    }

}
let round = new Circle(2);
round.setRadius = 23;


console.log(round.getRadius);
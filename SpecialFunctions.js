let car = {
    name : 'car',
}

let vehicle = {
    name : 'vehicle',
    
    speed : function(speed,units){
        console.log('Speed of the ' +  this.name + ' is ' + speed  + units )
    },

    startUp : function(){
        console.log(this.name + ' is starting');
    },
}

//vehicle.speed.call(car, '10' , 'km/hr');

function Computer(){
    this.name = 'Dell-Lattitude';
    this.isOn = true;

    this.turnOn = function(isOn, message){
        this.isOn = isOn;
        if(isOn){
            console.log(this.name + message);
        }
        else{
            console.log(this.name + message);
        }
    }
}

let server = {
    name : 'Winodws_Hosted',
    isOn : false
}
const comp = new Computer();
comp.turnOn.apply(server,[false,' is OFF']);
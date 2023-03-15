//Create an a class and extend it - Can be anything you would like it to be! 
class Car {
    constructor(make){
        this.make = make;
    }
    accellerate(){
        console.log("vrooom vroooom mathhaaafuckkkaa!!");
    }
}

class Toyota extends Car{
    constructor(make,model){
        super(make);
        this.model = model
    }
}

let supra = new Toyota('Toyota','Supra');

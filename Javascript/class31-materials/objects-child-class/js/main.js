//Create an a class and extend it - Can be anything you would like it to be! 
class Car {
    constructor(make){
        this.make = make;
    }
    accellerate(){
        console.log("vrooom vroooom mathhaaafuckkkaa!!");
    }
};

class Toyota extends Car{
    constructor(make,model){
        super(make);
        this.model = model
    }
};

let supra = new Toyota('Toyota','Supra');

//Leon's solution
class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`);
    }
};
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    } 
};

let simba = new Dog('Simba', 'Sheperd');

//my additions:
class Cat extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    speak(){
        console.log('meow');
    }
};
//create cat
let fido = new Cat('Fido','House Cat');

//my addition to Class Animal


class Whale extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    speak(){
        console.log('buuuuuuuuhhhhhhhhhhhhhhhhhh');
    }
};

let willy = new Whale('Willy','Killer Whale');

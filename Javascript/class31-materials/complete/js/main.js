class Animal{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    speak(){
        console.log(`${this._name} makes a sound`);
    }
};

class WildAnimal extends Animal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    get breed(){
        return this._breed;
    }
    speak(){
        super.speak();
        console.log(`${this._name} roars!`);
    }
    attack(){
        console.log(`${this._name} pounces towards you and attacks! ahhhh!`);
    }
};

class DomesticAnimal extends Animal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    get breed(){
        return this._breed;
    }
    speak(){
        super.speak();
        console.log(`${this._name} `)
    }
    approach(){
        console.log(`${this._name} approaches you innocently and rubs against your leg.. awee`)
    }
}


class Dog extends DomesticAnimal{
    constructor(name, breed){
        super(name, breed);
        this._breed = breed;
    }
    // get breed(){
    //     return this._breed;
    // }
    speak(){
        super.speak();
        console.log(`${this._name} barks`);
    }
};

class Cat extends DomesticAnimal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    // get breed(){
    //     return this._breed;
    // }
    speak(){
        super.speak();
        console.log()
    };
}

class Lion extends WildAnimal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    speak(){
        super.speak(`${this._name} meooows`);
    }
};

class Hyena extends WildAnimal{
    constructor(name, breed){
        super(name);
        this._breed = breed;
    }
    speak(){
        super.speak();
        console.log(`${this._name} goes for the balls and rips them off!`);
    }
};

let simba = new Dog('Simba','Shepard');
let machi = new Dog('The Machine','Pitbull');
let salem = new Cat('Salem', 'American Shorthair');
let mufasa = new Lion('Mufasa','African Lion');
let joker = new Hyena('Joker','Hyena');

let farm = [simba,machi,salem,mufasa,joker];

for( a of farm ){
    a.speak()
};
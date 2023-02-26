//Create an espresso machine constructor that makes machines with 4 properties and 3 methods

// //constuctor
// functon MakeCar(carMake,carModel,carColor,numOfDoors){
//     this.make = carMake
//     this.model = carModel
//     this.color = carColor
//     this.honk = function(){
//         alert('BEEP BEEP MOTHAFUCKAAA!')
//     }
//     this.lock = function (){
//         alert(`Locked ${this.door} doors!`)
//     }
// }

// let hondaCivic = new MakeCar('Honda','Civic','Silver' 4);

class EspressoMachine{
    constructor (color, make, model, price){
        this.color = color;
        this.make = make;
        this.model = model;
        this.price = price;
    }
    turnOn(){
        console.log('Good day, I am now on!');
    };
    steam(){
        console.log('ITTSSS SUMMER SALEEEEE 50%');
    };
    brew(){
        console.log('Good stuff coming your way!');
    };
};


// coffeesFinished(){
//     alert('Coffee is finished brewing!!');
// };
// caffeineLevel(){
//     console.log('This coffee is superrr strong');
// };
// machineOn(){
//     alert('Machine is now on and coffee brewing!');
// };

let gaggia = new EspressoMachine('red','Gaggia','Classic Pro', 400);
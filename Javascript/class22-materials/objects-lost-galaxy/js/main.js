//Create a mouse object that has four properties and three methods
let rodent = {
    size = 'small',
    color = 'gray',
    speed = 'fast',
    intelligence = 'smart',

}

let mouse = {}

mouse.brand = 'Logitech'
mouse.color = 'black'
mouse.model = 'MX Ergo'
mouse.wireless = true

mouse.leftClick = function (){
    console.log('LEFT CLICKKK');
}
mouse.scroll = function (){
    console.log('Jump jump jump');
}
mouse.rightClick = function(){
    console.log('RIGH CLICKKK');
}

let mouse2 = {}

mouse2.brand = 'Logitech'
mouse2.color = 'black'
mouse2.model = 'Pro Light'
mouse2.wireless = true

mouse2.leftClick = function (){
    console.log('LEFT CLICKKK');
}
mouse2.scroll = function (){
    console.log('Jump jump jump');
}
mouse2.rightClick = function(){
    console.log('RIGH CLICKKK');
}

let mouse3 = {}

mouse3.brand = 'Logitech'
mouse3.color = 'black'
mouse3.model = 'Magic Track 2'
mouse3.wireless = true

mouse3.leftClick = function (){
    console.log('LEFT CLICKKK');
}
mouse3.scroll = function (){
    console.log('SLIDE TWO FINGERS');
}
mouse3.rightClick = function(){
    console.log('RIGH CLICKKK');
}


//constuctor
functon makeCar(carMake,carModel,carColor,numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.honk = function(){
        alert('BEEP BEEP MOTHAFUCKAAA!')
    }
    this.lock = function (){
        alert(`Locked ${this.door} doors!`)
    }
}

let hondaCivic = new makeCar('Honda','Civic','Silver' 4);

let teslaModel3 = new makeCar('Tesla','Model 3', 'Red', 2);
//Create a street fighter constructor that makes fighting game characters 
//with 4 properties and 3 methods
function MakeSFFighter(fightingStyle, strength, speed, endurance, catchPhrase){
    this.style = fightingStyle
    this.strength = strength
    this.speed = speed
    this.endurance = endurance
    this.catchPhrase = catchPhrase
    this.powerUp = function(){
        alert('AHHHHHHHHH LETS GO EVEN FURTHER BEYONDDDD!')
    }
    this.hadoukenShot = function(){
        alert('HADOUUUKENNNN!')
    }
    this.taunt = function (){
        console.log(`You can't handle my ${this.hadoukenShot}`)
    }
    this.winning = function (){
        console.log(`haha! ${this.catchPhrase}`)
    }
}

let ryu = new MakeSFFighter('Karate', '100', 'Agile','super endurance','Get OVER HERE!')

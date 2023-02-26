// *Variables*
// Create a variable and console log the value
let vari = 10;
console.log(vari);
// Create a variable, add 10 to it, and alert the value
let newVari = 20;
newVari += 10;
alert(newVari);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtracts (a,b,c,d){
    alert(a - b - c- d);
}
subtracts(5,4,3,2,1);
// Create a function that divides one number by another and returns the remainder
function remainder (x,y){
    return x % y;
}
console.log(remainder(12,3));
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji (x,y){
    let sum = (x + y);
    //if (x + y > 50) -- this also works
    if (sum > 50){
        alert('Jumanji');
    }
}
jumanji(30,40);
// Create a function that multiplys three numbers and if the product is divisible 
// by 3 alert ZEBRA
function zebra (x,y,z){
    let product = (x * y * z);
    if (product % 3 === 0){
        alert('Zebra');
    }
}
zebra(12,4,3);
//*Loops*
//Create a function that takes in a word and a number. 
// Console log the word x times where x was the number passed in
function logWordXTimes(word,num){
    for (let i =1; i <= num; i++){
        console.log(word);
    }
}

logWordXTimes('wonderful', 21);
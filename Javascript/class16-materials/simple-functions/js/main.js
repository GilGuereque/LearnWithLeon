//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(x,y) {
    alert(x - y);
}
// subtract(50,30)
// subtract(100,33)
//create a function that divides three numbers and console logs the quotient
function divide(x,y,z) {
    console.log(x/y/z);
}
divide(12,4,3)
//create a function that multiplys three numbers and returns the product
function multiple(x,y,z) {
    return x * y * z;
}
function turnIntoMoney(){
    let quotient = multiple(5,10,2)
    alert('$' + quotient)
}
turnIntoMoney();

//---Medium
//create a function that takes in three numbers. 
//Add the first two numbers and return the remainder of dividing
// the sum of the first two numbers by the third number
function medium (x,y,z) {
    return (x + y) % z;
}
console.log(medium(3,3,2));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. 
//If the product is greater than 100 add the sum of the last two numbers and 
//console log the value. If the product is less that 100, subtract the difference 
//of the last two numbers and console log the value. If the product is 100, multiply 
//the first three numbers together and alert the remainder of dividing the fourth number
function hard (a,b,c,d) {
    let product = (a * b)
    if (product > 100) {
        console.log((c + d) + product);
        
    } else if (product < 100) {
        console.log(product - (c - d));
    } else {
        alert((a * b * c)/d);
    }
}
// hard()
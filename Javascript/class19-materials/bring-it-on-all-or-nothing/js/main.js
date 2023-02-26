// // *Variables*
// // Declare a variable, assign it a boolean, and alert the value
// let bool = true;
// alert(bool);

// // Declare a variable, reassign it to your favorite color, and console log the value
// let favColor = 'purple';
// favColor = 'turqouise';
// console.log(favColor);

// // *Functions*
// // Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
// function sumThree (a,b,c,d){
//     return (a + b + c);
// }
// sumThree(10,20,30,5);
// // Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
// function powerSecond (x,y){
//     console.log(Math.pow(x,y));
// }
// powerSecond(4,2);

// // *Conditionals*
// // Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
// function booleanString(bool,string){
//     if (bool){
//         alert(string);
//     } else {
//         console.log(string);
//     }
//     // bool ? alert(string) : console.log(string);
// }
// booleanString();
// the below is the same as all of the above using a "fat arrow" and ternary operator
// const booleanString = (bool,string) => bool ? alert(string) : console.log(string);

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, 
// if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(num){
    for (let i =1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if (i % 3 === 0){
            console.log('Fizz');
        } else if (i % 5 === 0){
            console.log('Buzz')
        } else{
            console.log(i);
        }
    }     
}
//fizzBuzz(10);
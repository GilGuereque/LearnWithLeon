//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let pokemonParty = ['bulbasaur','charmander','caterpie','squirtle','eevee'];

// //my solution:
// let reversedList = pokemonParty.reverse();
// console.log(reversedList);

//leon's solution:
function reverseParty(partyList){
    console.log(partyList.reverse());
}
reverseParty(['bulba','char','pika','butter']);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly
// greater than the sum of the cubes of each element in b.
let a = [1,2,3];
let b = [2,4,6,7];

function compareSquareAndCube(a,b){
    return a.reduce((acc,c) => acc + c **2, 0) > b.reduce((acc,c) => acc + c **3, 0);
};
// compareSquareAndCube([2,2,2],[2,2,2]);
console.log(compareSquareAndCube([4,4,5],[2,2,2]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//this filter method is using our condition below to check if each element is even (modulo) and if it passes the check, it is added to the new array
function isMultiple(arr){
    return arr.filter((e,i) => e % i === 0);
}

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumOfValues(arr){
    return arr.reduce((acc,c) => acc + Number(c), 0);
}

console.log(sumOfValues(['5',3,'2',1]));

//same as function above just in shorthand
const s = r => r.reduce((a,c)) => +a+ +c)
//Arrays

//Create and array of tv shows. Loop through and print each show to the console
// function printTvShows(){
// let tvShows = ['Better Call Saul','Stranger Things','Breaking Bad','The Sopranos']
// if(i = 0; i < tvShows.length; i++){
//     console.log(tvShows[i]);
// }
// }
// printTvShows();

//correct leon's way
let tvShows = ['Better Call Saul','Stranger Things','Breaking Bad','The Sopranos']

tvShows.forEach(show => console.log(show));


//Create and array of numbers
let nums = [21,56,88,24,99,710];
//Return a new array of numbers that includes every even number from the previous Arrays
let onlyEvens = arr => arr.filter(n => n % 2 === 0)
console.log(onlyEvens(nums));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

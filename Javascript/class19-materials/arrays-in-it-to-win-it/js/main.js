//Create an array of movies with at least three movies.
let movies = ['LOTR','Avatar','Titanic'];
//Using the array from above, store the first movie in a variable
let firstMovie = movies[0]
//Get the length of the original array and store it in a new variable
let arrLength = movies.length
console.log(arrLength); // 3
//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
let lastElement = movies[2];
// let lastElement = movies[movies.length - 1] //movies.length would always give us # 
// of elements. the -1 is bc index starts at 0.
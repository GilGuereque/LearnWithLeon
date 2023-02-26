//Create an array of movie titles. Loop through the array and each element to the h2.
// let movieTitles = ['LOTR','Toy Story','Riddick','Star Wars'];
// movieTitles.forEach((x,i) => console.log(x))
// correct answer
let movies = ["fight", "win", "worldwide"];

for(let i = 0;i < movies.length;i++){
    document.querySelector('h2').innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number 
//and replace the old number.
let numbers = [10,20,30];

// numbers[0] = numbers[0] + 3;
// numbers[1] = numbers[1] + 3;
// numbers[2] = numbers[2] + 3;

numbers.forEach((item, i) => {
    numbers[i] = item + 3
})

//Find the average of all the numbers from question three
let sum = 0

for(let i = 0;i < numbers.length; i++){
    sum += numbers[i];
    
}
//getting the average
console.log(sum/numbers.length)
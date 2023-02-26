let total = 0
// get input value
document.querySelector('#convert').addEventListener('click', convert)

// code function and apply input to the formula inside the function
function convert() {
    let temp = document.querySelector('#celsius').value
    // calculate conversion
    // formula = (x * 9/5) + 32
    temp = (temp * 9/5) + 32
    // output the value
    document.querySelector('#placeToPutResult').innerText = temp
}























// //Write your pseduo code first! 
// let total = 0
// //get input value for the celsius value
// document.querySelector('#convert').addEventListener('click', convert)
// //apply input value to the formula for converting to fahrenheit
// function convert () {
//     //need the value from celsius
//     let temp = document.querySelector('#celsius').value
//     //calculate celsius to fahrenheit
//     // (x * 9/5) + 32 = Fahrenheit
//     temp = temp * 9/5 + 32
//     //output the fahrenheit value
//     document.querySelector('#placeToPutResult').innerText = temp
// }



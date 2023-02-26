let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)

function makeZero() {
total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

// if  total > 18)
//   console.log("You are an adult")



// syntax showing what const variable does
const pizza = "Dominos"

if (pizza === "Papa Johns") {
  console.log("Scram!")
} else if(pizza === "Dominos") {
  console.log("All aboard the train to flavor town")
} else {
  console.log("What are you even doing with your life?")
}
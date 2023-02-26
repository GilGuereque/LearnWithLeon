document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day === "Tuesday" || day === 'Thursday'){
    var classDay = {str: "CLASS DAY!", id: 5}
    document.querySelector('#classDay').innerText = classDay
  }else if(day === "Saturday" || day === "Sunday"){
    var weekend = {str: "WEEKEND!", id:5}
    document.querySelector('#weekend').innerText = weekend
  }else{
    var boring = {str: "BOORRRRRINGGGG!!!". id:5}
    document.querySelector('#boring').innerText = boring
  }

}

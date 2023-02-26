document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    document.querySelector('#placeToSee').innerText = 'Class Day!'
    //console.log("Class Day!")
    
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector('#placeToSee').innerHTML = 'ITS THE WEEKENDD!'
  } else {
    document.querySelector('#placeToSee').innerHTML = 'BOOOORINGGG!'
  }

}

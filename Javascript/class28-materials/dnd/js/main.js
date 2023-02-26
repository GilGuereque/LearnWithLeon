//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  let ul = document.querySelector('ul')
  while(ul.firstChild){
    let child = ul.firstChild
    ul.removeChild(child);
  }


  //DID NOT WORK: check if there is a spell in the dom, if so clear it first:
  // if (document.querySelector('.spells').innerText !== ""){
  //     document.querySelector('.spells').innerText === ""
  // }


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.subclasses)
        // console.log(data.subclasses[0].name)
        // console.log(data.subclasses[1].name)
        
        data.subclasses.forEach( obj => {
          console.log(obj.name)
          //create an li
          const li = document.createElement('li')
          //add text to li
          li.textContent = obj.name

          //remove li
          // li.remove();
          //remove the previous li from the dom
          // document.querySelector('ul').removeChild(li);

          //append the li to the ul
          document.querySelector('ul').appendChild(li)

          
        })
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


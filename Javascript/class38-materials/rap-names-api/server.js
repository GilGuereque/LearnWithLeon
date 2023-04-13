// set up express to be stored in the app variable 
const express = require('express');
const app = express();
const PORT = 8000

const rappers = {
    '21 Savage':{
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'Chance the Rapper':{
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago, Illinois'
    },
    'Dylan':{
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
    },
    'Kendrick Lamar':{
    'age': 35,
    'birthName': 'Kendrick Lamar Duckworth',
    'birthLocation': 'Compton, California'
    },
}

// create get request using express app variable to retreive a file
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

// get request to API to retrieve a JSON
app.get('/api', (request,response) =>{
    response.json(rappers)
})

// create local server
app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}! You better go
     catch it!`)
});
const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const axios = require("axios").create();

// create express app
const app = express();
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


const getCards = () => {
    try {
        return axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    } catch (error) {
        console.error(error)
    }
}

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Rest API By BlackJack." });
});


app.get('/find', (req, res) => {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });

});


// listen for requests
app.listen(7000, () => {
    console.log("Server is listening on port 7000");
});
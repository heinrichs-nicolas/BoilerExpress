require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//built-in middleware to communicate with the server using JSON. this middleware parses the JSON data and makes it available in req.body.
app.use(express.json());

// built-in middleware for json 
app.use(express.json());

// route
app.get("/", (req, res) => {
    res.json({ message: "hello express" })
})

app.use(errorHandler);

module.exports = app;

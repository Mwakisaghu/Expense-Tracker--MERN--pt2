const express = require('express');
const dotenv = require('dotenv'); // Help create our global environments
const colors = require('colors'); // Colors added to our console
const morgan = require('morgan'); // Helps with our login
const res = require('express/lib/response');

//Points to to the global env
dotenv.config({ path: './config/config.env' });

//Initialise the express server
const app = express();

//Initial routes
app.get('/', (req, res) => res.send('Hello World!'));

const PORT = process.env.PORT || 5000;

//Run the server
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

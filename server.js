require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();


app.get('/', (req, res) => {
    console.log('Oh hey! I got a request. Let me respond with something');
    res.send('Hello World!');
  });

app.listen(3000, () => {
    console.log('Express is listening for requests from the browser');
  });
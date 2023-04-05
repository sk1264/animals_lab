require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();


app.get('/', (req, res) => {
    console.log('default route');
    res.send('Hello World!');
  });

app.listen(process.env.PORT, () =>
	console.log(`express is listening on port: ${process.env.PORT}`)
);
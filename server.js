require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();


app.get('/', (req, res) => {
    console.log('default route');
    res.send('default route');
  });

app.use(morgan("tiny")) 
app.use(methodOverride("_method")) 
app.use(express.urlencoded({extended: true})) 
app.use(express.static("public")) 

app.get('/', (req, res) => {
    res.send('default route')
})

const animalsController = require('./controllers/animals');
app.use('/animals', animalsController);


app.listen(process.env.PORT, () =>
	console.log(`express is listening on port: ${process.env.PORT}`)
);
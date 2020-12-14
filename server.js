const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'alex'
    });
})

app.get('/about', (req, res) => {

    res.render('about');
})


/*app.get('/data', function(req, res) {
    res.send('Hola Data')
})*/


app.listen(3000, () => {
    console.log('Escuchando peticiones en puerto 3000');
})
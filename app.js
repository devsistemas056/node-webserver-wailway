require('dotenv').config();
const express = require('express');
const hbs = require('hbs');


const app = express();
const PORT = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err)=>{

});

// Servir contenido automativo
app.use(express.static('public'));

app.get('/', function (req, res) {
    //res.send('Helo Word');
    res.render('home', {
        nombre: "Hugo Niquen Diaz",
        titulo: "Curso Node",
        version: "v0.0.1"
    });
});

app.get('/generic', (req, res)=>{
    // res.sendFile(__dirname +  '/public/generic.html');
    res.render('generic');  // Con hsb
});

app.get('/elements', (req, res)=>{
    //res.sendFile(__dirname +  '/public/elements.html');
    res.render('elements');   // Con hsb
});


app.get('*', (req, res)=>{
    //res.sendFile(__dirname + '/public/404.html');
    res.render('404');
});


app.listen(PORT, ()=>{
    console.log(`Server ejecutando en el puerto: ${PORT}`);
});
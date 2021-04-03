const express = require('express');
const hbs = require('hbs');


const app = express();
const port = 8080;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public', {
    extensions: ['html']
}));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Víctor Guiérrez',
        titulo: 'Aprendiendo Node',
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Víctor Guiérrez',
        titulo: 'Aprendiendo Node',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Víctor Guiérrez',
        titulo: 'Aprendiendo Node',
    });
});




app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});



const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'hbs');


app.use(express.static('public', {
    extensions: ['html']
}));

app.get('/', (req, res) => {
    res.render('home', {
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



var express = require('express');
var exphbs = require('express-handlebars');

var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

let contador = 0;


app.get('/', function(request, response){
    var contexto = {
        titulo: 'Página principal',
    };
    response.render('home', contexto);
});

app.get('/welcome', function(request, response){
    var contexto = {
        titulo: 'Página principal',
    };
    response.render('welcome', contexto);
});


app.post('/login', function(request, response){
    console.log(request.body);

    //Calculos antes de redirigir a página
    //ej agregar, publicar

    fs.writeFile('data'+contador+'.txt', 'Correo: '+request.body.correo +", Contraseña: "+request.body.contra, function (err) {
        if (err) throw err;
        console.log('Saved!');
        contador++;
      });

    response.redirect('welcome');
});

app.listen(3000); 
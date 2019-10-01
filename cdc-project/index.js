const express = require('express');
const app = express();
const porta = 3000;

//console.log(app);

app.set('view engine', 'ejs'); // EJS como motor de visualização

app.listen(porta, function(){
    console.log("Servidor funcionando!");
});

app.get('/',function(req, res){
    console.log('Chamando /');
    //res.send('<h1> Enviando o HTML na mão </h1>');
    res.render('index');
});

app.get('/produtos',function(req, res){
    console.log('Chamando /produtos');
    res.render('produtos/lista');
});
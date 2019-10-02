const express = require('express');
const app = express();
const porta = 3000;

app.set('view engine', 'ejs'); // EJS como motor de visualização

require('./routes/produtos')(app);

// habilita os arquivos staticos no express
app.use(express.static('./public'));

app.listen(porta, function(){
    console.log("Servidor funcionando!", porta);
});

// Home
app.get('/',function(req, res){
    console.log('Chamando /');
    //res.send('<h1> Enviando o HTML na mão </h1>');
    res.render('index');
});

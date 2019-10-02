const connectionFactory = require('../infra/createDBConection');

module.exports = function(app) {

    app.get('/produtos',function(req, res){
        console.log('Chamando /produtos');

        const conn = connectionFactory();

        conn.query('select * from livros', function(err, result){
            console.log(result);
            res.render('produtos/lista', {
                lista: result
            });
        });
        conn.end();
    });
    
    return app;

}
const connectionFactory = require('../infra/createDBConection');
const ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {

    app.get('/produtos',function(req, res){
        console.log('Chamando /produtos');

        const conn = connectionFactory();
        const produtoDao = new ProdutoDao(conn);
 
    produtoDao.lista(function(err, results, fields){
            res.render('produtos/lista', {
                lista: results
            });
        })
        conn.end();
    });
    
    return app;

}
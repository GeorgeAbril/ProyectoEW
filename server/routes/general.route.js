module.exports = app => {
    app.get('/api/category/Getcategory', (req, res) => {
        var data = require('../json/category.json');
        res.json(data);
    })

    app.get('/api/recomendados/GetRecomendados', (req, res) => {
        var data = require('../json/recomendados.json');
        res.json(data);
    })

    app.get('/api/pedidos/GetMasPedidos', (req, res)=>{
        var data = require('../json/maspedidos.json');
        res.json(data);
    })
}
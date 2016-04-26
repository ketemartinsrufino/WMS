var express  = require('express');
var router   = express.Router();

router.get('/', function (req, res){

    res.header("Content-Type", "application/json; charset=utf-8");

    res.json({
        status: 'deu certo'
    });

});

//ai, se tu quiser um POST:
router.post('/', function (req, res){
    res.header("Content-Type", "application/json; charset=utf-8");

    res.json({
        status: '[post]deu certo'
    });
});

//PUT
router.put('/', function (req, res){
});

//DELETE
router.delete('/', function (req, res){
});


//se vc quiser passar parâmetros?
router.get('/:id', function (req, res){

//ai dentro do callback vc pega o parâmetro assim
//req.params.id

});

module.exports = router;